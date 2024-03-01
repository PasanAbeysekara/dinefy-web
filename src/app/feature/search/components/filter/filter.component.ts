import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bank } from 'src/app/models/bank';
import { Sort } from 'src/app/models/sort';
import { ReplaySubject, Subject } from 'rxjs';
import { FiltersSheetComponent } from '../filters-sheet/filters-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MoreFiltersModalComponent } from '../more-filters-modal/more-filters-modal.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { takeUntil } from 'rxjs/operators';
import { GetFacilitiesService } from 'src/app/services/get-facilities.service';
import { GetTagsService } from 'src/app/services/get-tags.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  facilitiesList: string[];

  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([0, 5000])
  });

  minValue = 0;
  maxValue = 5000;

  facilities = new FormControl();
  facilityList: string[] = [];
  defaultValue = this.facilityList[0];

  /** control for the selected bank */
  public bankCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl();

  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  private banks: Bank[] = [];

  /*
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
    */

  sort: Sort[] = [
    {value: 'price', viewValue: 'Sort By Price'},
    {value: 'default', viewValue: 'Sort By Rating'},
    {value: 'pop', viewValue: 'Sort By Popularity'}
  ];

  selectedSort = this.sort[2].value;
  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** list of banks filtered by search keyword for multi-selection */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
  public manualRefresh: EventEmitter<void> = new EventEmitter<void>();

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  constructor(private BottomSheet: MatBottomSheet, public dialog: MatDialog,  private getFacilitiesService : GetFacilitiesService, private getTagsService : GetTagsService) { 
  }

  ngOnInit(): void {
    this.getFacilitiesService.getFacilitiesInfo().subscribe(data => {
      const facilities = data;
      facilities.forEach(element => {
        if (!this.facilityList.includes(element.name)){
          this.facilityList.push(element.name);
        }
      });
    }, error => {
      console.log(error);
    });
    // need to config a way to store data in cache.
    this.getTagsService.getTagsInfo().subscribe( data => {
      const tags = data;
      tags.forEach(element => {
        const bank = { name : element.name, id : element.tagId};
        if (this.banks.findIndex(i => i.name == bank.name) == -1){
          this.banks.push(bank);
        }

        this.bankCtrl.setValue(this.banks[0]);

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

      });
    });
  }

  menuToggle(value: boolean) {

    setTimeout(() => {
      console.log('Test');
      this.manualRefresh.emit();
    }, 100);

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

  resetForm(): void {
    this.sliderForm.reset({sliderControl: [0, 5000]});
  }
  closeMyMenu() {
    this.trigger.closeMenu();
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

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
