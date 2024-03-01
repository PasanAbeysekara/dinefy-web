import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material-experimental/mdc-select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRightSheetModule } from 'mat-right-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgImageSliderModule } from 'ng-image-slider';

import { ErgMenuComponent } from './components/erg-menu/erg-menu.component';
import { ReserveModalComponent } from './components/reserve-modal/reserve-modal.component';
import { BottomSheetReserveSheetComponent } from './components/bottom-sheet-reserve-sheet/bottom-sheet-reserve-sheet.component';
import { ItemsSummaryComponent } from './components/items-summary/items-summary.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';

import { ScrollContainerDirective, ScrollSectionDirective } from '../../directives/auto-scroll';
import { ScrollListnerDirective } from '../../directives/scroll-listner.directive';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductFacilitiesComponent } from './components/product-facilities/product-facilities.component';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { ProductMapComponent } from './components/product-map/product-map.component';
import { ProductMediaComponent } from './components/product-media/product-media.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FullMenuComponent } from './components/full-menu/full-menu.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

@NgModule({
  declarations: [
    ProductComponent,
    ErgMenuComponent,
    ReserveModalComponent,
    BottomSheetReserveSheetComponent,
    ItemsSummaryComponent,
    UserCommentsComponent,
    ScrollContainerDirective,
    ScrollSectionDirective,
    ScrollListnerDirective,
    ImageSliderComponent,
    ProductImagesComponent,
    ProductOverviewComponent,
    ProductFacilitiesComponent,
    ProductMenuComponent,
    ProductMapComponent,
    ProductMediaComponent,
    ProductReviewsComponent,
    ProductSummaryComponent,
    FullMenuComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatChipsModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatSortModule,
    MatStepperModule,
    MatRightSheetModule,
    MatSelectModule,
    MatBadgeModule,
    MatCardModule,
    MatRippleModule,
    MatSidenavModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,

    CarouselModule,
    GoogleMapsModule,
    NgImageSliderModule,
    NgImageFullscreenViewModule,
    PipesModule
  ]
})
export class ProductModule { }
