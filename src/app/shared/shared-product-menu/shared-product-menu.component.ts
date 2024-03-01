import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-product-menu',
  templateUrl: './shared-product-menu.component.html',
  styleUrls: ['./shared-product-menu.component.scss']
})
export class SharedProductMenuComponent implements OnInit {
  @Output() choiceSelected: EventEmitter<SelectedChoice> = new EventEmitter();
  @Input() type: string;
  @Input() menus: Array<any> = [];
  selectedChoice: SelectedChoice = new SelectedChoice();

  constructor() { }

  ngOnInit(): void {
  }

  addToBasket(choiceId: number, size: string, name: string, price: string, currency: string): void {
    const animationElement = document.getElementById('cart-button');
    animationElement.classList.add('shakeit');
    setTimeout(function(){
      animationElement.classList.remove('shakeit');
    }, 300);

    this.selectedChoice = {
      choiceId : choiceId,
      size: size,
      name: name,
      price: price,
      currency: currency,
      quantity : 1
    };

    this.choiceSelected.emit(this.selectedChoice);
  }

}

export class SelectedChoice{
  choiceId: number;
  size: string;
  name: string;
  price: string;
  currency: string;
  quantity: number;
}
