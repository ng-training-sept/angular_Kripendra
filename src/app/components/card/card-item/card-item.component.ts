import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Route } from '@angular/router';
import { Card } from '../card.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ItemSaveUpdateComponent } from '../../item-save-update/item-save-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule]
})


export class CardItemComponent implements OnInit {

  id!: string;
  data!: Card;
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  private readonly http = inject(HttpClient);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
   this.data = history.state?.data;
  }

   openItemDialog(): void {
  //   //const dialogRef = this.dialog.open(ItemSaveUpdateComponent, { cardData });
  //   const dialogRef = this.dialog.open(ItemSaveUpdateComponent, {cardData});
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result?.data) {
  //       // emit update event and call service from parent to update card

  //     }
  //   });
  //const dialogref = this.dialog.open(ItemSaveUpdateComponent, {this.data});
   }

   onDelete():void{
    console.log(this.route.parent);
    this.http.delete<Card>(`${environment.baseUrl}/${this.route.parent}/${this.id}`)
      .subscribe(response => {console.log(response)});
   }
}
