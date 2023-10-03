import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { Card } from '../card/card.model';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-item-save-update',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatDialogModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './item-save-update.component.html',
  styleUrls: ['./item-save-update.component.scss']
})
export class ItemSaveUpdateComponent implements OnInit {

  private readonly dialogRef = inject(MatDialogRef);
  private readonly dialogData = inject(MAT_DIALOG_DATA);
  private readonly http = inject(HttpClient);

  itemForm!: FormGroup;

  ngOnInit(): void {
    this.initItemForm();
    this.patchItemForm();
    this.itemForm.valueChanges.subscribe(data => console.log(data));
  }
    

  initItemForm(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('')
    });
  }

  patchItemForm(): void {
    if (this.dialogData) {
      this.itemForm.patchValue({
        name: this.dialogData.name,
        imageUrl: this.dialogData.imageUrl,
        price: this.dialogData.price,
        description: this.dialogData.description
      });
    }
  }

  onSaveOrUpdate(): void {
    //data!: Card;
    this.http.put<Card>(`${environment.baseUrl}/grocery/${this.dialogData.id}`, {

    });
    this.dialogRef.close({ data: this.itemForm.value });
  }
}
