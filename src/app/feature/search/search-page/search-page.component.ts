import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSelectModule } from '@angular/material-experimental/mdc-select';
import { Options } from 'ng5-slider';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/shared/header/header.service';
import { FiltersSheetComponent } from '../components/filters-sheet/filters-sheet.component';
import { MoreFiltersModalComponent } from '../components/more-filters-modal/more-filters-modal.component';
import { SearchResultsService } from 'src/app/services/search-results.service';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/models/app-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  headerClass: string;
  options: Options = {
    floor: 0,
    ceil: 5000,
    hideLimitLabels: true,
    hidePointerLabels: false,
    draggableRange: true,
    animate: true,
    step: 1,
  };

  page = 0;
  notScrolly = true;
  notEmptyPost = true;

  @ViewChild('singleSelect') singleSelect: MatSelectModule;

  ResultArray = [];
  compareWith: (o1: any, o2: any) => boolean;
  loading$: Observable<boolean>;

  constructor(
    private BottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private headerData: HeaderService,
    private _searchResultsService: SearchResultsService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    const element = document.getElementById('navbar');
    element.classList.add('sticky');
    element.classList.remove('home-header');

    // this.ResultArray = <any> [
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM', '07.30 PM'],
    //     type: 'product-tile-content--horiz',
    //     description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM', '07.30 PM'],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar. Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar. Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     url: '/product',
    //     Price: '7,750',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     url: '/product',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    //   {
    //     imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
    //     name: 'Happy hour at cafe Noir',
    //     location: 'Colombo',
    //     currency: 'LKR',
    //     Price: '7,750',
    //     url: '/product',
    //     TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
    //     type: 'product-tile-content--horiz',
    //     description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
    //   },
    // ];
    this.getSearchResults();

  }

  openBottomSheet(): void {
    this.BottomSheet.open(FiltersSheetComponent, {
      panelClass: ['bottom-sheet--default', 'filtersSheet'],
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'LKR';
    }

    return value;
  }

  moreFilters(): void {
    const dialogRef = this.dialog.open(MoreFiltersModalComponent, {
      panelClass: ['modal--small'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // calling get search results service
  getSearchResults(){
    const what = 5;
    const where = '';
    const size = 10;
    this._searchResultsService.getSearchResults(what, where, this.page, size)
      .subscribe(
        (data) => {
          if (this.notScrolly === false) {
            this.ResultArray = this.ResultArray.concat(data.data.content);
          }
          else {
            this.ResultArray = data.data.content;
          }
        },
        (error) => {
          console.log('error', error);
        }
      )
  }

  // When scroll down the screen  
  onScroll()  
  {
    this.notScrolly = false;
    this.page = this.page + 1;  
    this.getSearchResults();    
  }

}
