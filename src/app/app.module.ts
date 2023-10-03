import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { SportsComponent } from './forms/sports/sports.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './forms/pagenotfound/pagenotfound.component';
import { HomeComponent } from './forms/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './forms/add-product/add-product.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardComponent,
    GroceryComponent,
    SportsComponent,
    HeaderComponent,
    CardItemComponent,
    FormsModule,
    HomeComponent,
    PagenotfoundComponent,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    AddProductComponent,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
