import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  PromotionsArray: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    margin: 0,
    stagePadding: 16,
    autoWidth: false,
    nav: false,
    navText:  ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  };
  placesSlider: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    nav: false,
    stagePadding: 16,
    autoWidth: false,
    navText:  ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.PromotionsArray = <any> [
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '7,750',
        id: '1',
        url: '/product/mcn_pannip',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-samui-hotels/pagePropertiesImage/best-hotels-samui.jpg.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '37,912',
        id: '2',
        url: '/product/mcn_pannip',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-samui-hotels/pagePropertiesImage/best-hotels-samui.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '2,750',
        id: '3',
        url: '/product/mcn_pannip',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '2,751',
        id: '4',
        url: '/product/mcn_pannip',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
    ];
  }

}
