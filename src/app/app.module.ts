import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { GoogleMapsModule } from '@angular/google-maps';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import {ScrollSpyService} from './services/scroll-spy.service';
// import {AutoScrollService} from './services/auto-scroll.service';
import {ScrollContainerDirective, ScrollSectionDirective} from './directives/auto-scroll';
import { ScrollListnerDirective } from './directives/scroll-listner.directive';
// import {SliderWrapperModule} from './components/slider-wrapper/slider-wrapper.module';
import { FavouritePlaceTileComponent } from './components/favourite-place-tile/favourite-place-tile.component';
import { ScrollSpyItemDirective } from './directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { ScrollSpyContentDirective } from './directives/scroll-spy-content.directive';

import { AutoScrollService } from './services/auto-scroll.service';
import { ScaffMainComponent } from './scaffoldings/scaff-main/scaff-main.component';
import { ScaffSecondaryComponent } from './scaffoldings/scaff-secondary/scaff-secondary.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './store/reducers/product.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { AppConfig } from './app.config';
import { ReservationReducer } from './store/reducers/reservation.reducer';
import { ReservationEffects } from './store/effects/reservation.effects';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}
@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyItemDirective,
    ScrollSpyDirective,
    ScrollSpyContentDirective,
//    ScrollSpyComponent,
//    ScrollContainerDirective,
//    ScrollSectionDirective,
//    ScrollListnerDirective,
//    FavouritePlaceTileComponent,
    ScaffMainComponent,
    ScaffSecondaryComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgImageSliderModule,
    GoogleMapsModule,
    NgbModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    Ng5SliderModule,
    NgxSkeletonLoaderModule,
    NgxMaterialTimepickerModule,
    StoreModule.forRoot({
      product: ProductReducer,
      reservation: ReservationReducer,
    }),
    EffectsModule.forRoot([ProductEffects, ReservationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    AutoScrollService,
    AppConfig,
    {
      provide : APP_INITIALIZER,
      useFactory : initializeApp,
      deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
