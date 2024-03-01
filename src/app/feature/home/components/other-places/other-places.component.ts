import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-other-places',
  templateUrl: './other-places.component.html',
  styleUrls: ['./other-places.component.scss']
})
export class OtherPlacesComponent implements OnInit {

  PlacesArray: any;

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
    this.PlacesArray = <any> [
      {
        id: 'pl1',
        imgUrl: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2019/09/yimg_e9dsV5.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Tea Avenue',
      },
      {
        id: 'pl2',
        imgUrl: 'https://www.primeresidencies.lk/?w=630&src=resources/212/slide1.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Barnes Place',
      },
      {
        id: 'pl3',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Kingsbury',
      },
      {
        id: 'pl4',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Kingsbury',
      },
    ];
  }

}
