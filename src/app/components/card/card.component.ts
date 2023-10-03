import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from './card.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule, RouterModule, ReactiveFormsModule]
})
export class CardComponent {

  private readonly router: Router = inject(Router);  // provides navigation between views
  private readonly route: ActivatedRoute = inject(ActivatedRoute);   //conatains all the info associated with routes in this component
  private readonly dialog = inject(MatDialog);

    @Input() cards: Card[] = [];

    goToItemDetails(data: Card): void {
      this.router.navigate(['card-item', data.id], {state: {data}, relativeTo: this.route}).then();
    }
    // In above: ['card-item', data.id] => card-item/id

   
    openItemDialog(data: Card): void {
      const dialogRef = this.dialog.open(ItemSaveUpdateComponent, {
        data // initial data to dialog (remember dialogData in ItemSaveUpdateComponent)
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result?.data) {
          // emit update event and call service from parent to update card
          
        }
      });
    }
 }

/* 
smart component = state mgmt
dumb component = process input gives output
*/
 