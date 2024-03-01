import { Component, OnInit, ViewChild } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { FormControl, NgModel } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelectModule } from '@angular/material-experimental/mdc-select';
import { takeUntil, take } from 'rxjs/operators';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Sort } from '../../../../models/sort';
import { Bank } from '../../../../models/bank';

@Component({
  selector: 'app-filters-sheet',
  templateUrl: './filters-sheet.component.html',
  styleUrls: ['./filters-sheet.component.scss']
})
export class FiltersSheetComponent implements OnInit {

  public from: 0;
  public to: 100;
  minValue = 100;
  maxValue = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    hideLimitLabels: true,
    hidePointerLabels: false,
    draggableRange: false,
    animate: false,
    step: 0,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'LKR' + value;
        case LabelType.High:
          return 'LKR' + value;
        default:
          return 'LKR' + value;
      }
    }
  };
  filterElement = [
    {
      value: 0,
      highValue: 15,
      options: {
        floor: 0,
        ceil: 15,
        step: 0.1
      },
    },
    {
      value: 1,
      highValue: 1200,
      options: {
        floor: 1,
        ceil: 1200,
      },
    }];

  noClickable($event: MouseEvent) {
    $event.stopPropagation();
  }
  /** control for the selected bank */
  public bankCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl();

  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();
  toppings = new FormControl();
  toppingList: string[] = ['All', 'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  defaultValue = this.toppingList[0];
  sort: Sort[] = [
    {value: 'price', viewValue: 'Sort By Price'},
    {value: 'default', viewValue: 'Sort By Rating'},
    {value: 'pop', viewValue: 'Sort By Popularity'}
  ];
  private banks: Bank[] = [
    {name: 'Bank A (Switzerland)', id: 'A'},
    {name: 'Bank B (Switzerland)', id: 'B'},
    {name: 'Bank C (France)', id: 'C'},
    {name: 'Bank D (France)', id: 'D'},
    {name: 'Bank E (France)', id: 'E'},
    {name: 'Bank F (Italy)', id: 'F'},
    {name: 'Bank G (Italy)', id: 'G'},
    {name: 'Bank H (Italy)', id: 'H'},
    {name: 'Bank I (Italy)', id: 'I'},
    {name: 'Bank J (Italy)', id: 'J'},
    {name: 'Bank K (Italy)', id: 'K'},
    {name: 'Bank L (Germany)', id: 'L'},
    {name: 'Bank M (Germany)', id: 'M'},
    {name: 'Bank N (Germany)', id: 'N'},
    {name: 'Bank O (Germany)', id: 'O'},
    {name: 'Bank P (Germany)', id: 'P'},
    {name: 'Bank Q (Germany)', id: 'Q'},
    {name: 'Bank R (Germany)', id: 'R'}
  ];

  selectedSort = this.sort[2].value;
  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** list of banks filtered by search keyword for multi-selection */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelectModule;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  ResultArray: any;
  compareWith: (o1: any, o2: any) => boolean;

  ngOnInit(): void {
    const element = document.getElementById('navbar');
    element.classList.add('sticky');
    this.ResultArray = <any> [
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM', '07.30 PM'],
        type: 'product-tile-content--horiz',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM', '07.30 PM'],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar. Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar. Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        url: '/product',
        Price: '7,750',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        url: '/product',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        name: 'Happy hour at cafe Noir',
        location: 'Colombo',
        currency: 'LKR',
        Price: '7,750',
        url: '/product',
        TimeSlots: ['07.30 PM', '07.45 PM', '08.00 PM', '08.15 PM', '08.30 PM',],
        type: 'product-tile-content--horiz',
        description: 'Contemporary rooms & suites, some with balconies, in a hip hotel offering dining & a rooftop bar.',
      },
    ];
    this.bankCtrl.setValue(this.banks[10]);

    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());
    this.filteredBanksMulti.next(this.banks.slice());

    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
    this.bankMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 100) + 'k';
    }

    return value;
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  private setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        // this.singleSelect.compareWith = (a: Bank, b: Bank) => a.id === b.id;
      });
  }

  private filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }


  constructor(private BottomSheetRef: MatBottomSheetRef<FiltersSheetComponent>) {
  }

  openLink(event: MouseEvent): void {
    this.BottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeFilters(): void {
    this.BottomSheetRef.dismiss();
  }

  deselectAll(select: NgModel) {
    select.update.emit([]);
  }

}
