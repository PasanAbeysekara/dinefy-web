import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  mainImagesArray: any;
  customSlider: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    margin: 0,
    stagePadding: 16,
    autoWidth: true,
    nav: false,
    navText: ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
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
  }

}
