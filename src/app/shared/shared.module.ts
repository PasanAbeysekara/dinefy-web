import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { AutoSuggestComponent } from './auto-suggest/auto-suggest.component';
import { InputSpinnerComponent } from './input-spinner/input-spinner.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material-experimental/mdc-select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { EmptyLoaderComponent } from './empty-loader/empty-loader.component';
import { ScrollSpyComponent } from './scroll-spy/scroll-spy.component';
import { SharedProductMenuComponent } from './shared-product-menu/shared-product-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchWidgetComponent, AutoSuggestComponent, InputSpinnerComponent, RatingStarsComponent, EmptyLoaderComponent, ScrollSpyComponent, SharedProductMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatChipsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    NgbModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchWidgetComponent,
    InputSpinnerComponent,
    RatingStarsComponent,
    SharedProductMenuComponent
  ]
})
export class SharedModule { }
