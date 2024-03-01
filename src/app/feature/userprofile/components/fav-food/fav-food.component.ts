import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-food',
  templateUrl: './fav-food.component.html',
  styleUrls: ['./fav-food.component.scss']
})
export class FavFoodComponent implements OnInit {
  favFoods = [
    {
      image: 'https://driscolls.imgix.net/-/media/assets/recipes/classic-strawberry-shortcake-recipe.ashx',
      name: 'Driscoll\'s Classic Strawberry Shortcake',
      restaurent: 'Chinese Restaurent',
      description: 'Heavy cream, baking soda, baking powder, all purpose flour, vanilla extract'
    },
    {
      image: 'https://whiskeyinthejar.pl/www/wp-content/uploads/2017/08/whiskey_old_fashioned_jar_maly_na_strone_2017.07.27.jpg',
      name: 'WHISKEY IN THE JAR, Wroclaw',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      image: 'https://img.taste.com.au/mz48WLZC/w643-h428-cfill-q90/taste/2016/11/easy-green-superfood-salad-68411-1.jpeg',
      name: 'Taste Easy green superfood salad',
      restaurent: 'Chinese Restaurent',
      description: 'Broccoli, apple cider vinegar, pumpkin seeds, chia seeds, sunflower seeds.'
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png',
      name: 'Roast chicken',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/10/roasted-chicken-4.jpg',
      name: 'Driscoll\'s Classic Strawberry Shortcake',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      image: 'https://whiskeyinthejar.pl/www/wp-content/uploads/2017/08/whiskey_old_fashioned_jar_maly_na_strone_2017.07.27.jpg',
      name: 'WHISKEY IN THE JAR, Wroclaw',
      restaurent: 'Chinese Restaurent',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface FavFoodItem{
  image: string;
  name: string;
  restaurent: string;
  description: string;
}
