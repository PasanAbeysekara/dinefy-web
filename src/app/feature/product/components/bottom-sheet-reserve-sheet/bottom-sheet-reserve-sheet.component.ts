import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
// import { BottomSheetReserveSheet } from 'dist/pages/product-page/product-page.component';
import { MatDialog } from '@angular/material/dialog';
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';
import { SysAvailabilityUnit, AvailabilityUnits } from 'src/app/models/api/productInfoModel';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { Subscription } from 'rxjs';
import { element } from 'protractor';
import { Reservation } from 'src/app/models/api/reservationModel';
import { AddReservation } from 'src/app/store/actions/reservation.actions';
import { CapacityItem } from 'src/app/shared/input-spinner/input-spinner.component';

@Component({
  selector: 'app-bottom-sheet-reserve-sheet',
  templateUrl: './bottom-sheet-reserve-sheet.component.html',
  styleUrls: ['./bottom-sheet-reserve-sheet.component.scss']
})
export class BottomSheetReserveSheetComponent implements OnInit {

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
  
  constructor(private BottomSheetRef: MatBottomSheetRef<BottomSheetReserveSheetComponent>,
              public dialog: MatDialog,
              private store: Store<AppState>,
              private cd: ChangeDetectorRef) {
  }

  openLink(event: MouseEvent): void {
    this.BottomSheetRef.dismiss();
    event.preventDefault();
  }

  reserve(): void {
    this.store.dispatch(new AddReservation(this.reservation));
    const dialogRef = this.dialog.open(ReserveModalComponent, {
      panelClass: ['modal--medium', 'modal--stepper'],
      data: {}
    });
    this.BottomSheetRef.dismiss();
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  closeSheet(): void {
    this.BottomSheetRef.dismiss();
  }

  ngOnInit(): void{
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

  onDate(event): void {
    this.reservation = {...this.reservation, date: event.value};
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

  selectAvailUnit(id: number){
    const unit = this.selectedAvailabilityUnits.find(i => i.propAvailabilityUnitId.unit_id == id);
    this.reservation = {...this.reservation ,
      propId: unit.propAvailabilityUnitId.propId,
      availableUnitId: unit.propAvailabilityUnitId.unit_id};
    this.selectedAvailUnit = unit.name ? unit.name : unit.sysAvailabilityUnit.name;
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

  setReservationTimeSlot(time){
    this.reservation = {...this.reservation, time: time};
  }

  ngOnDestroy(): void {
    if(this.productInfoSub){
      this.productInfoSub.unsubscribe();
    }
    if(this.reservationInfoSub){
      this.reservationInfoSub.unsubscribe();
    }

  }

}
