import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatRightSheetModule } from 'mat-right-sheet';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { FloatinBasketSheetComponent } from './components/floatin-basket-sheet/floatin-basket-sheet.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [CheckoutComponent, FloatinBasketSheetComponent, MenuComponent, OrderSummaryComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule,
    MatRightSheetModule,
    MatButtonModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PipesModule
  ]
})
export class CheckoutModule { }
