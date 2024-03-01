import { Component, OnInit, Input } from '@angular/core';
import { FavFoodItem } from '../fav-food/fav-food.component';

@Component({
  selector: 'app-fav-food-item',
  templateUrl: './fav-food-item.component.html',
  styleUrls: ['./fav-food-item.component.scss']
})
export class FavFoodItemComponent implements OnInit {
@Input() favFoodItem: FavFoodItem;
  constructor() { }

  ngOnInit(): void {
  }

}

