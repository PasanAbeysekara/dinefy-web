import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { PropMediaModel } from 'src/app/models/api/productInfoModel';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {

  productInfoSub: Subscription;
  bannerImages: PropMediaModel[] = [];
  indexImageObject: Array<object> =[];
  isIndexImageShowing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productInfoSub = this.store.select(store => store.product.list)
    .subscribe((data) => {
        this.bannerImages = data.propertyMediaWrapper.bannerImages;
        this.indexImageObject[0] = {
          image : data.propertyMediaWrapper.otherMedia[0] ?  data.propertyMediaWrapper.otherMedia[0].mediaUrl : '',
        };
    }, (error) => {
        console.log(error);
    });
  }

  viewAll(){
    this.isIndexImageShowing = true;
  }

  closeIndexImageHandler(){
    this.isIndexImageShowing = false;
  }

  ngOnDestroy(): void {
    if (this.productInfoSub){
      this.productInfoSub.unsubscribe();
    }
  }
}
