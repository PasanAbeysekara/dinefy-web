import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ProfileComponent} from './pages/user/profile/profile.component';
import { ScaffMainComponent } from './scaffoldings/scaff-main/scaff-main.component';
import { ScaffSecondaryComponent } from './scaffoldings/scaff-secondary/scaff-secondary.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: '', 
    component: ScaffMainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
      },
      { 
        path: 'search',
        loadChildren: () => import('./feature/search/search.module').then(m => m.SearchModule) 
      }
    ] 
  },
  { 
    path: '', 
    component: ScaffSecondaryComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./feature/product/product.module').then(m => m.ProductModule)
      }
    ]
  },
  { 
    path: '',
    component: ScaffMainComponent,
    children: [
      {
        path: 'checkout',
        loadChildren: () => import('./feature/checkout/checkout.module').then(m => m.CheckoutModule)
      }
    ]
  },
  { 
    path: '',
    component: ScaffSecondaryComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./feature/userprofile/userprofile.module').then(m => m.UserprofileModule)
      }
    ]
  }
  /*{
    path: 'profile',
    component: ProfileComponent,
  },*/
  /*{
    path: '**',
    redirectTo: 'home'
  }*/
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
