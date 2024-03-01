import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { QuickSearchComponent } from './components/quick-search/quick-search.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../../shared/shared.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { OtherPlacesComponent } from './components/other-places/other-places.component';
import { PlaceTileComponent } from './components/place-tile/place-tile.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    BackgroundComponent, 
    QuickSearchComponent, 
    PromotionsComponent, ProductsItemComponent, RecommendationsComponent, OtherPlacesComponent, PlaceTileComponent, JoinUsComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    CarouselModule
  ]
})
export class HomeModule { }
