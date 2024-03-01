import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
// import { AutoScrollService } from '../../../services/auto-scroll.service';
import { MatDialog } from '@angular/material/dialog';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Section } from '../../../models/section';
import { Subscription, Observable } from 'rxjs';
import { AutoScrollService } from '../../../services/auto-scroll.service';
import { ReserveModalComponent } from '../components/reserve-modal/reserve-modal.component';
import { BottomSheetReserveSheetComponent } from '../components/bottom-sheet-reserve-sheet/bottom-sheet-reserve-sheet.component';
import { GetProductService } from 'src/app/services/get-product.service';
import { AppState } from 'src/app/store/models/app-state.model';
import { Store } from '@ngrx/store';
import { LoadProductAction } from 'src/app/store/actions/product.actions';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductInfoModel, PropMenus, AvailabilityUnits } from 'src/app/models/api/productInfoModel';
import { Reservation } from 'src/app/models/api/reservationModel';
import { AddReservation, PostReservation } from 'src/app/store/actions/reservation.actions';
import { CapacityItem } from 'src/app/shared/input-spinner/input-spinner.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('.5s ease-out',
              style({ height: 500, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 500, opacity: 1 }),
            animate('.5s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('easeInOut', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('500ms ease-in', style({
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate('500ms ease-in', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ProductComponent implements OnInit, OnDestroy {

  currentSection = 'section1';
  collapsed = false;
  modalAttached = true;
  mainImagesArray: any;

  baseUrl = 'https://s3.amazonaws.com/sample-v1';
  images = ['architecture', 'boat', 'bonding', 'books', 'family'];
  selected;
  list: any[] = [];

  sections: Array<Section>;
  selectedSection: Section;

  private subscription: Subscription = new Subscription();
  private noOfSections = 0;

  loading$: Observable<boolean>;

  type: string;
  productName: string;
  productInfoSub: Subscription;
  reservationInfoSub: Subscription;

  availabiltyUnitTypes: string[] = [];
  availabilityUnitTypeButtonWidth: string;
  intialTimeSlots: string[] = [];
  timeSlots: string[] = [];
  availabiltyUnits: AvailabilityUnits[];
  selectedAvailabilityUnits: AvailabilityUnits[];
  selectedAvailUnit = 'What are you looking for ?';
  showViewMore = false;
  private today = new Date();
  reservation: Reservation;
  capacityString = '0 people';
  currentScrollPosition = 0;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private scrollService: AutoScrollService,
    public dialog: MatDialog,
    private BottomSheetRef: MatBottomSheet,
    private autoScrollService: AutoScrollService,
    private getProduct: GetProductService,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    const element = document.getElementById('navbar');
    const body = document.getElementById('body');
    const html = document.getElementsByTagName('html');
    body.classList.add('overflow-hidden-b');
    element.classList.remove('home-header');
    element.classList.add('sticky');
    // Getting product id from url and send it to the service to fetch the product
    this.router.params.subscribe((params: Params) => {
      this.getProductInfo(1);
    });

    this.list = this.images.map(name => `${this.baseUrl}/${name}.jpg`);
    this.mainImagesArray = <any>[
      {
        id: 'pl1',
        imgUrl: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2019/09/yimg_e9dsV5.jpg',
      },
      {
        id: 'pl2',
        imgUrl: 'https://www.primeresidencies.lk/?w=630&src=resources/212/slide1.jpg',
      },
      {
        id: 'pl3',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
      },
      {
        id: 'pl4',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
      },
    ];
    this.subscription.add(this.autoScrollService.sections.subscribe(sections => {
      if (sections) {
        this.sections = sections;
        this.noOfSections = sections.length;
      }
    }));
    this.subscription.add(this.autoScrollService.currentSection.subscribe(section => {
      if (section) {
        this.selectedSection = section;
      }
    }));
    this.autoScrollService.stickyHeights.set(1, -550);
    this.productInfoSub = this.store.select(store => store.product.list).subscribe(
      (data) => {
        const availabilityUnits = data.availabilityUnits;
        this.timeSlots = data.timeSlots;
        this.intialTimeSlots = data.timeSlots;
        this.setTimeSlots();
        this.availabiltyUnits = data.availabilityUnits;
        availabilityUnits.forEach(element => {
          if (!this.availabiltyUnitTypes.includes(element.sysAvailabilityUnit.type)){
            this.availabiltyUnitTypes.push(element.sysAvailabilityUnit.type);
          }
        });
        this.availabilityUnitTypeButtonWidth = (100 / this.availabiltyUnitTypes.length) + '%';
        this.setItems(this.availabiltyUnitTypes[0]);
      }
    );

    this.reservationInfoSub = this.store.select(store => store.reservation.reservation).subscribe(data => {
      this.reservation = data;
    });
  }

  ngOnDestroy(): void {
    if (this.productInfoSub){
      this.productInfoSub.unsubscribe();
    }

    if(this.reservationInfoSub){
      this.reservationInfoSub.unsubscribe();
    }
    
    const body = document.getElementById('body');
    body.classList.remove('overflow-hidden-b');
  }

  reserve(): void {
    this.store.dispatch(new AddReservation(this.reservation));
    const dialogRef = this.dialog.open(ReserveModalComponent, {
      panelClass: ['modal--medium', 'modal--stepper'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openReserveSheet(): void {
    this.BottomSheetRef.open(BottomSheetReserveSheetComponent, {
      panelClass: ['bottom-sheet--default'],
    });
  }

  modelCollapse($event) {
    this.currentScrollPosition = $event;
    if (!this.modalAttached){
      if ($event > 600) {
        const element = document.getElementById('formFieldContainer');
        element.classList.add('formFieldContainer--sticky');
        const element2 = document.getElementById('reserve-btn');
        element2.classList.add('extended-fab--label-hide');
        this.collapsed = true;
      } else {
        const element = document.getElementById('formFieldContainer');
        element.classList.remove('formFieldContainer--sticky');
        this.collapsed = false;
        const element2 = document.getElementById('reserve-btn');
        element2.classList.remove('extended-fab--label-hide');
      }
    }
    
  }
  
  goToSection(section: Section) {
    this.autoScrollService.isTabClicked = true;
    this.selectedSection = section;
    this.autoScrollService.currentSection.next(section);
  }

  getProductInfo(resId: number){
    this.loading$ = this.store.select(store => store.product.loading);
    this.store.dispatch(new LoadProductAction());
  }

  onDate(event): void {
    this.reservation = {...this.reservation, date : event.value};
    this.timeSlots = this.intialTimeSlots;
    if (event.value.getDate() == this.today.getDate()){
      const tempSlots = [];
      // tslint:disable-next-line:no-shadowed-variable
      this.timeSlots.forEach(element => {
        if ( parseInt(element.split(':')[0], 0) > this.today.getHours()){
          tempSlots.push(element);
        }
      });

      this.timeSlots = tempSlots;
    }else{
      this.setTimeSlots();
    }
    this.cd.detectChanges();
  }

  capacityChangedHandler(capacityItem: CapacityItem){
    this.reservation = {...this.reservation, headCount: capacityItem.capacity};
    this.capacityString = capacityItem.capacityString;
    this.cd.detectChanges();
  }

  setItems(type: string){
    this.reservation = {...this.reservation, availableUnitType: type};
    this.selectedAvailabilityUnits = [];
    this.availabiltyUnits.forEach(element => {
      if (element.sysAvailabilityUnit.type.valueOf() == type.valueOf()){
        this.selectedAvailabilityUnits.push(element);
      }
    });
  }

  setTimeSlots() {
    const step = Math.round(this.intialTimeSlots.length / 5);
    const selectedSlots = [];

    if (this.intialTimeSlots.length > 5){
      this.showViewMore = true;

      for (let i = 0, j = 0; i < 5; i++){
        selectedSlots.push(this.intialTimeSlots[j]);
        j = j + step;
      }

      this.timeSlots = selectedSlots;
    }

  }

  selectAvailUnit(id: number){
    const unit = this.selectedAvailabilityUnits.find(i => i.propAvailabilityUnitId.unit_id == id);
    this.reservation = {...this.reservation ,
      propId: unit.propAvailabilityUnitId.propId,
      availableUnitId: unit.propAvailabilityUnitId.unit_id};
    this.selectedAvailUnit = unit.name ? unit.name : unit.sysAvailabilityUnit.name;
  }

  viewMore() {
    this.timeSlots = this.intialTimeSlots;
    this.showViewMore = false;
    this.cd.detectChanges();
  }

  showLess() {
    this.setTimeSlots();
    this.showViewMore = true;
    this.cd.detectChanges();
  }

  toggleReservationModal(){
    if (this.modalAttached && this.currentScrollPosition < 600){
      this.modalAttached = false;
      this.collapsed = false;
    }else if (this.modalAttached && this.currentScrollPosition >= 600){
      this.modalAttached = false;
      this.collapsed = true;
    } else {
      this.modalAttached = true;
      this.collapsed = false;
    }
  }

  setReservationTimeSlot(time){
    this.reservation = {...this.reservation, time: time};
  }

}
