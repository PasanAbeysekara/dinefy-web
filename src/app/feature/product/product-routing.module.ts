import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FullMenuComponent } from './components/full-menu/full-menu.component';

const routes: Routes = [
  { 
    path: ':code', 
    component: ProductComponent 
  },
  {
    path: ':code/menus',
    component: FullMenuComponent
  },
  {
    path: '', 
    redirectTo: '/search'
  },
  {
    path: '**',
    redirectTo: 'search'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
