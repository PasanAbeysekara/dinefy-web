import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-spinner',
  templateUrl: './input-spinner.component.html',
  styleUrls: ['./input-spinner.component.scss']
})
export class InputSpinnerComponent implements OnInit {
  @Output() capacityChanged: EventEmitter<CapacityItem> = new EventEmitter();
  adults: number = 0;
  children: number = 0;
  capacityItem: CapacityItem = new CapacityItem();
  capacityString: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  changeCapacity(type: string, isIncrement: boolean): void{
    switch (type){
      case 'adult' :
        this.adults = isIncrement ? ++this.adults : --this.adults;
        break;

      case 'child' :
        this.children = isIncrement ? ++this.children : --this.children;
        break;

      default:

    }
    const adultsString = this.adults != 0 ? this.adults.toString() + ' Adults' : '';
    const childString = this.children != 0 ? this.children.toString() + ' Children' : '';
    this.capacityItem.capacityString = adultsString +  (this.children > 0 ? ', ' + childString : '');
    this.capacityItem.capacity = this.adults + this.children;

    this.capacityChanged.emit(this.capacityItem);
  }
}

export class CapacityItem{
  capacityString: string;
  capacity: number;
}
