import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environment';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDialogModule, ReactiveFormsModule, MatInputModule]
})
export class AddProductComponent implements OnInit {

  addProduct!: FormGroup;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.generateForm();    
  }

  generateForm(): void {
    this.addProduct = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imageUrl: new FormControl(''),
      price: new FormControl ('', [Validators.required, Validators.min(0)]),
      description: new FormControl(''),
      category: new FormControl('', [Validators.required])
    })
  }

  onSave(): void {
    console.log(this.addProduct.value.name,
      this.addProduct.value.imageUrl,
      this.addProduct.value.price,
      this.addProduct.value.description);
    this.http.post(`${environment.baseUrl}/${this.addProduct.value.category}`, {
      id: 3,
      name: this.addProduct.value.name,
      imageUrl: this.addProduct.value.imageUrl,
      price: this.addProduct.value.price,
      description: this.addProduct.value.description
    }).subscribe(response => console.log(response));
  }

  onCancel(): void {
    this.route.parent;
  }

}
