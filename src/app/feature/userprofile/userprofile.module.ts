import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material-experimental/mdc-select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRightSheetModule} from 'mat-right-sheet';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CarouselModule} from 'ngx-owl-carousel-o';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgImageSliderModule } from 'ng-image-slider';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMatTimepickerModule, NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryItemComponent, AddReviewCommentModalComponent } from './components/order-history-item/order-history-item.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoyaltyComponent } from './components/loyalty/loyalty.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FavRestaurentsComponent } from './components/fav-restaurents/fav-restaurents.component';
import { FavFoodComponent } from './components/fav-food/fav-food.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { FavFoodItemComponent } from './components/fav-food-item/fav-food-item.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';


@NgModule({
  declarations: [ProfileComponent, OrderHistoryItemComponent, OrderHistoryComponent, AddReviewCommentModalComponent, UserDetailsComponent, LoyaltyComponent, ReservationsComponent, FavRestaurentsComponent, FavFoodComponent, UserDetailsFormComponent, FavFoodItemComponent, ReservationItemComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatChipsModule,
    CarouselModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgImageSliderModule,
    GoogleMapsModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatStepperModule,
    MatRightSheetModule,
    MatBadgeModule,
    NgbModule,
    MatRippleModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    Ng5SliderModule,
    NgxSkeletonLoaderModule,
    MatSidenavModule,
    NgxMaterialTimepickerModule,
    MatListModule,
    MatPaginatorModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class UserprofileModule { }
