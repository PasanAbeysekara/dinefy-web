import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//import {  MatHorizontalStepper, MatVerticalStepper } from '@angular/material/stepper';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { PostReservation } from 'src/app/store/actions/reservation.actions';
import { Reservation } from 'src/app/models/api/reservationModel';
import { Router } from '@angular/router';
import { ProductInfoModel } from 'src/app/models/api/productInfoModel';

@Component({
  selector: 'app-reserve-modal',
  templateUrl: './reserve-modal.component.html',
  styleUrls: ['./reserve-modal.component.scss']
})
export class ReserveModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReserveModalComponent>, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver
  , private changeDetectorRef: ChangeDetectorRef, private store: Store<AppState>, private router: Router) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  // tharinda
  // @ViewChild(MatHorizontalStepper) stepperHorizontal: MatHorizontalStepper;
  // @ViewChild(MatVerticalStepper) stepperVertical: MatVerticalStepper;
  @ViewChild(MatStep) stepOne: MatStep;
  @ViewChild(MatStepper) matStepper: MatStepper;

  isLinear = true;
  stepOneCompleted = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  guestFormGroup: FormGroup;
  signInFormGroup: FormGroup;
  signUpFormGroup: FormGroup;
  smallScreen: boolean;
  signUp: boolean;
  signIn: boolean;
  guest: boolean;
  reservation: Reservation = new Reservation();
  specialRequests: string;
  productInfo: ProductInfoModel;
  options: string[] = [];

  goBack(stepper: MatStepper) {
    stepper.previous();
    this.matStepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  userJourneyMange(user) {

    if (this.secondFormGroup){
      this.secondFormGroup.reset();
    }

    if (this.stepOneCompleted){
      this.stepOneCompleted = false;
    }

    if (user === 'signUp') {
      this.signUp = true;
      this.signIn = false;
      this.guest = false;
      this.secondFormGroup = this.signUpFormGroup;

    }
    if (user === 'signIn') {
      this.signUp = false;
      this.signIn = true;
      this.guest = false;
      this.secondFormGroup = this.signInFormGroup;
    }
    if (user === 'guest') {
      this.signUp = false;
      this.signIn = false;
      this.guest = true;
      this.secondFormGroup = this.guestFormGroup;
    }
    this.stepOneCompleted = true;
    this.changeDetectorRef.detectChanges();

    if(this.smallScreen){
      this.goForward(this.matStepper);
    }else{
      this.goForward(this.matStepper);
    }
    
  }

  ngOnInit() {
    /*this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });*/
    this.signInFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.guestFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.store.select(store => store.reservation.reservation).subscribe(data => {
      this.reservation = data;
    });

    this.store.select(store => store.product.list).subscribe(data => {
      this.productInfo = data;
    });

  }

  makeReservation(){
      this.reservation = {...this.reservation, specialRequest : this.specialRequests,
        slotLength: this.productInfo.reservationSlotLength,
        slotMinutes: this.productInfo.reservationSlotMinutes,
        option1: this.options[0] ? this.options[0] : null,
        option2: this.options[1] ? this.options[1] : null };
      this.store.dispatch(new PostReservation(this.reservation));
      this.router.navigate(['checkout']);

  }

  setOptions($event, type){
    if ($event.checked){
      if (!this.options.includes(type)){
        this.options.push(type);
      }
    }else{
      const index = this.options.findIndex(i => i == type);
      if ( index != -1){
        this.options.splice(index, 1);
      }
    }
  }
}
