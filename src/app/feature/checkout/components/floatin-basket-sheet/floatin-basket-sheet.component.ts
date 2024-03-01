import { Component } from '@angular/core';
import { MatRightSheetRef } from 'mat-right-sheet';

@Component({
  selector: 'app-floatin-basket-sheet',
  templateUrl: './floatin-basket-sheet.component.html',
  styleUrls: ['./floatin-basket-sheet.component.scss']
})
export class FloatinBasketSheetComponent {

  constructor(private RightSheetRef: MatRightSheetRef<FloatinBasketSheetComponent>) {
  }

  openLink(event: MouseEvent): void {
    this.RightSheetRef.dismiss();
    event.preventDefault();
  }

  closeBasket(): void {
    this.RightSheetRef.dismiss();
  }

}
