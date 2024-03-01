import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-product-map',
  templateUrl: './product-map.component.html',
  styleUrls: ['./product-map.component.scss']
})
export class ProductMapComponent implements OnInit {

  productInfoSub: Subscription;
  latitude: number;
  longtitude: number;
  options: google.maps.MapOptions = {
    center: {lat: 0, lng: 0},
    zoom: 12
  };
  markerOptions: google.maps.MarkerOptions = {draggable: false};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productInfoSub = this.store.select(store => store.product.list)
    .subscribe((data) => {
        this.options.center.lat = data.latitude;
        this.options.center.lng = data.longitude;
    }, (error) => {
        console.log(error);
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    if (this.productInfoSub){
      this.productInfoSub.unsubscribe();
    }
  }

}
