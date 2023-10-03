import { Routes } from "@angular/router";
import { GroceryComponent } from "./grocery.component";
import { CardItemComponent } from "src/app/components/card/card-item/card-item.component";

export const routes: Routes = [
    { path: '', component: GroceryComponent },
    { path: 'card-item/:id', component: CardItemComponent}
];


/*

component should be light weight

but sometimes

heavy lifting 

*/