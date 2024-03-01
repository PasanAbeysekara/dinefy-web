import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { Subscription } from 'rxjs';
import { ProductSpeciality } from 'src/app/models/ui/productSpecialitiesModel';
import { ProductOperationHour } from 'src/app/models/ui/productOperationHoursModel';
import { ProductPaymentOption } from 'src/app/models/ui/productPaymentOptionModel';
import { ProductOverviewComponent } from '../product-overview/product-overview.component';
import { PropTags } from 'src/app/models/api/productInfoModel';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {

  productSummarySub: Subscription;
  cuisines: ProductSpeciality[];
  operationHours: ProductOperationHour[];
  paymentOptions: ProductPaymentOption[];
  tags: PropTags[];
  productSummary;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productSummary = this.store.select(store => store.product.list)
    .subscribe((data) => {
        this.cuisines = data.propertySpecialities;
        this.operationHours = data.operationHours;
        this.paymentOptions = data.paymentOptions;
        this.tags = data.tags;
    }, (error) => {
        console.log(error);
    });
  }

  ngOnDestroy(): void {
    if (this.productSummarySub){
      this.productSummarySub.unsubscribe();
    }
  }

}
