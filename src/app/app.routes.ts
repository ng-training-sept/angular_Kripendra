import { Routes } from "@angular/router";
import { PagenotfoundComponent } from "./forms/pagenotfound/pagenotfound.component";
import { authGuard } from "./auth/auth.constants";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: 'sports', component: SportsComponent },  // => early loading routing
    // below is lazyly loading routing
    {path: 'home', loadComponent: () => import('./forms/home/home.component').then(m => m.HomeComponent)},
    {path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent)},
    {path: 'grocery',  loadComponent: () => import('./forms/grocery/grocery.component').then(m => m.GroceryComponent)},
    {path: 'addProduct', loadComponent: () => import('./forms/add-product/add-product.component').then(m => m.AddProductComponent)},
    {path: 'sports', loadChildren: () => import('./forms/sports/sports.route').then(m => m.routes)},
    {path: 'grocery', canActivate:[authGuard], loadChildren: () => import('./forms/grocery/grocery.route').then(m => m.routes)},
    {path: '**', component: PagenotfoundComponent}
  ];