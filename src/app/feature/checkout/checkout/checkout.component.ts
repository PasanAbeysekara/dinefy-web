import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import {MatRightSheet, MatRightSheetRef} from 'mat-right-sheet';

// import {shakeItOff} from '../../components/animations/shake.animation';
import {AnimationBuilder, AnimationPlayer, group, query, style, animate, keyframes} from '@angular/animations';
import {
  trigger
} from '@angular/animations';
import { FloatinBasketSheetComponent } from '../components/floatin-basket-sheet/floatin-basket-sheet.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { LoadProductAction } from 'src/app/store/actions/product.actions';
import { ProductInfoModel, PropChoices } from 'src/app/models/api/productInfoModel';
import { Subscription, Observable } from 'rxjs';
import { Reservation, OrderChoice, Order } from 'src/app/models/api/reservationModel';
import { SelectedChoice } from 'src/app/shared/shared-product-menu/shared-product-menu.component';
import { UpdateReservation } from 'src/app/store/actions/reservation.actions';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductChoice } from 'src/app/models/ui/productChoicesModel';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private player: AnimationPlayer;
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  constructor(private RightSheet: MatRightSheet, private builder: AnimationBuilder, private store: Store<AppState>) {
  }

  loading$: Observable<boolean>;
  zoom = 12;
  public basketRef;
  center: google.maps.LatLngLiteral = {
    lat : 0,
    lng : 0
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  productInfoSubcription: Subscription;
  reservationSubscription: Subscription;
  productInfo: ProductInfoModel;
  reservation: Reservation;
  bookingEndTime: string;
  bookingEndDate: Date;
  reservationLoading = true;
  menuChoices: ProductChoice[] = [];
  selectedChoices: SelectedChoice[] = [];
  totalAmount = 0;
  isDrawerOpened = false;

  ngOnInit() {
    const element = document.getElementById('navbar');
    element.classList.add('sticky');
    element.classList.remove('home-header');

    this.productInfoSubcription = this.store.select(store => store.product.list).subscribe(data => {
      this.productInfo = data;
      this.menuChoices = data.propMenus.choices;
      this.center.lat = data.latitude;
      this.center.lng = data.longitude;
    });

    this.reservationSubscription = this.store.select(store => store.reservation).subscribe(data => {
      if (!data.loading){
        this.reservationLoading = false;
        this.reservation = data.reservation;
        this.calculateBookingEndTime(data.reservation.time,
          data.reservation.date,
          data.reservation.slotMinutes,
          data.reservation.slotLength);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.getElementById('cart-button');
      element.classList.add('extended-fab--label-hide');
    } else {
      const element = document.getElementById('cart-button');
      element.classList.remove('extended-fab--label-hide');
    }
  }

  choiceSelectedHandler(selectedChoice: SelectedChoice): void{
    const index = this.selectedChoices.findIndex( i =>
      (i.choiceId === selectedChoice.choiceId) &&
      (i.size.toString() === selectedChoice.size.toString()));

    if (index < 0){
      this.selectedChoices.push(selectedChoice);
    }else{
      this.selectedChoices[index].quantity = this.selectedChoices[index].quantity + 1;
    }

    this.totalAmount = this.totalAmount + parseInt(selectedChoice.price);
  }

  changeQuantity(choiceId: number, size: string , isIncrement: boolean): void{
    const index = this.selectedChoices.findIndex( i => ((i.choiceId === choiceId) && (i.size === size)));
    const quantity = this.selectedChoices[index].quantity;
    const price = this.selectedChoices[index].price;
    if ( isIncrement ){
      this.selectedChoices[index].quantity = quantity + 1;
      this.totalAmount = this.totalAmount + parseInt(price);
    }else{
      if ( quantity == 1 ){
        this.selectedChoices.splice(index, 1);
      }else{
        this.selectedChoices[index].quantity = quantity - 1;
      }
      this.totalAmount = this.totalAmount - parseInt(price);
    }
  }


  openBasket(): void {
    this.basketRef = this.RightSheet.open(FloatinBasketSheetComponent, {
      panelClass: 'floatingBasket',
      hasBackdrop: false,
    });
  }

  ngOnDestroy(): void {
    if (this.productInfoSubcription){
      this.productInfoSubcription.unsubscribe();
    }

    if (this.reservationSubscription){
      this.reservationSubscription.unsubscribe();
    }
  }

  calculateBookingEndTime(startTimeString: string, startDate: Date, slotMinutes: number, slotLength: number){
    const startHour = parseInt(startTimeString.split(':')[0]);
    const startMinutes = parseInt(startTimeString.split(':')[1]);

    startDate.setHours(startHour);
    startDate.setMinutes(startMinutes);

    const reservationLength = slotMinutes * slotLength;
    const endDate = new Date(startDate.getTime() + reservationLength * 60000);

    const bookingEndMinutes = (endDate.getMinutes() < 10) ? endDate.getMinutes().toString() + '0' : endDate.getMinutes().toString();
    this.bookingEndTime = endDate.getHours().toString() + ':' + bookingEndMinutes;
    this.bookingEndDate = endDate.getDate() != startDate.getDate() ? endDate : null;
  }

  addOrders(){
    const orderChoices: OrderChoice[] = [];
    this.selectedChoices.forEach(choice => {
        const orderChoice: OrderChoice = {
          orderChoiceId : {
            reservationId : this.reservation.reservationId,
            orderId : 0,
            propId: parseInt(this.productInfo.propId),
            choiceId : choice.choiceId,
            orderChoiceSubId : this.getOrderChoiceSubId(choice.size)
          },
          quantity : choice.quantity,
          subAmount : choice.quantity * parseFloat(choice.price),
          amountCurrency : this.productInfo.amountCurrency,
          size: choice.size
        };

        orderChoices.push(orderChoice);
    });

    const order: Order = {
      orderId: {
        reservationId : 0,
        orderId: 1,
      },
      totalAmount: this.totalAmount,
      amountCurrency: this.productInfo.amountCurrency,
      orderChoices : orderChoices,
    };
    this.reservation = {...this.reservation, orders : [order]};
    this.store.dispatch(new UpdateReservation(this.reservation, this.reservation.reservationId));
  }

  getOrderChoiceSubId(size: string){
    switch (size){
      case 'Small' :
        return 1;
      case 'Medium' :
        return 2;
      case 'Large' :
        return 3;
      default :
        return 0;
    }
  }

  onOpenedChange(isOpen: boolean){
    this.isDrawerOpened = isOpen;
  }

}
