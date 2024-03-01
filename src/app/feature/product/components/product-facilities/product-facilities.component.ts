import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { Subscription } from 'rxjs';
import { ProductFacilities } from 'src/app/models/ui/productFacilitiesModel';

@Component({
  selector: 'app-product-facilities',
  templateUrl: './product-facilities.component.html',
  styleUrls: ['./product-facilities.component.scss']
})
export class ProductFacilitiesComponent implements OnInit {
  facilities$: ProductFacilities[];
  productFacilitiesSub: Subscription;
  productFacilities$;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productFacilities$ = this.store.select(store => store.product.list)
      .subscribe(
        (data) => {
          this.facilities$ = data.facilities;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnDestroy() {
    if (this.productFacilitiesSub){
      this.productFacilitiesSub.unsubscribe();
    }
  }

}
