import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../../../models/productModel';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  @Input() model: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

}
