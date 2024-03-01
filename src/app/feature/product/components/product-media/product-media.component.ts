import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropMediaModel } from 'src/app/models/api/productInfoModel';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-product-media',
  templateUrl: './product-media.component.html',
  styleUrls: ['./product-media.component.scss']
})
export class ProductMediaComponent implements OnInit {

  indexImageObject: Array<object> =[];
  isIndexImageShowing = false;

  imageObject: Array<object> = [
    /*{
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    }*/
    /*{
      image: 'https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80',
      alt: 'Image alt'
    },
    {
      video: '../assets/encoded.mp4',
      posterImage: '../assets/encoded_img.jpg',
      title: 'Local Video',
      alt: 'Image alt'
    },
    {
      video: 'https://youtu.be/6pxRHBw-k8M',
      posterImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      title: 'Image title'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      thumbImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      alt: 'Image alt'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    }*/
  ];

  productInfoSub: Subscription;
  otherMedia: PropMediaModel[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productInfoSub = this.store.select(store => store.product.list)
    .subscribe((data) => {
        this.otherMedia = data.propertyMediaWrapper.otherMedia;
        this.setImageObject();
    }, (error) => {
        console.log(error);
    });
  }

  setImageObject(){
    this.otherMedia.forEach(element => {
      if ( element.mediaType == 'image'){
        this.imageObject.push({
          image: element.mediaUrl,
          thumbImage: element.thumbnail,
          title: element.title,
          alt: 'Image alt'
        });

        if (this.indexImageObject.length == 0){
          this.indexImageObject.push({
            image: element.mediaUrl
          })
        }
      } else {
        this.imageObject.push({
          video: element.mediaUrl,
          posterImage: element.thumbnail,
          title: element.title,
          alt: 'Video alt'
        });
      }
    });
  }

  seeAll(){
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
