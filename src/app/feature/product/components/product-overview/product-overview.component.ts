import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { ProductInfoModel } from 'src/app/models/api/productInfoModel';
import { PropTags } from 'src/app/models/api/productInfoModel';
import { Subscription } from 'rxjs';
import { ProductFacilities } from 'src/app/models/ui/productFacilitiesModel';
import { element } from 'protractor';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {

  productOverview: ProductInfoModel;
  productInfoSub: Subscription;

  showMore = false;
  text = 'A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.';
  isDataLoaded = false;

  tagsObj: PropTags[];
  
  topFacilities: string[] = [];
  topTags: string[] = [];

  avgRating = 0.0;
  totalRatings = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productInfoSub = this.store.select(store => store.product.list)
      .subscribe(
        (data) => {
          this.productOverview = data;
          this.avgRating = Math.round(data.avgRating / 2);
          this.totalRatings = data.totalRating;
          this.setTopFacilities(data.facilities);
          this.setTopTags(data.tags);
          this.isDataLoaded = true;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  setTopFacilities(facilities: ProductFacilities[]){
    facilities.forEach(element => {
      if (element.order != 0 && element.order <= AppConfig.settings.topItemLimit.limit){
        this.topFacilities[element.order] = element.sysFacility.icon;
      }
    });
  }

  setTopTags(tags: PropTags[]){
    tags.forEach(element => {
      if (element.order != 0 && element.order <= AppConfig.settings.topItemLimit.limit){
        this.topTags[element.order] = element.name == null ? element.sysTags.name : element.name;
      }
    });
  }

  ngOnDestroy() {
    this.productInfoSub.unsubscribe();
  }
}
