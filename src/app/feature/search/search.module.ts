import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Ng5SliderModule } from 'ng5-slider';
// Added to get results when user scrolls to bottom of the search page
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material-experimental/mdc-select';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { FiltersSheetComponent } from './components/filters-sheet/filters-sheet.component';
import { MoreFiltersModalComponent } from './components/more-filters-modal/more-filters-modal.component';
import { SliderWrapperComponent } from './components/slider-wrapper/slider-wrapper.component';
import { MatSelectSearchComponent } from './components/mat-select-search/mat-select-search.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [ SearchPageComponent, SearchResultComponent, FiltersSheetComponent, MoreFiltersModalComponent, SliderWrapperComponent, MatSelectSearchComponent, FilterComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    NgxSkeletonLoaderModule,
    Ng5SliderModule,
    MatMenuModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    InfiniteScrollModule
  ],
  providers: []
})
export class SearchModule { }
