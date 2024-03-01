import { Component, OnInit, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-slider-wrapper',
  templateUrl: './slider-wrapper.component.html',
  styleUrls: ['./slider-wrapper.component.scss']
})
export class SliderWrapperComponent implements OnInit {

  minValue = 0;
  maxValue = 5000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    hideLimitLabels: true,
    hidePointerLabels: false,
    draggableRange: true,
    animate: false,
    step: 1,
  };
  public manualRefresh: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  noClickable($event: MouseEvent) {
    $event.stopPropagation();
  }
  menuToggle(value: boolean) {

    setTimeout(() => {
      console.log('Test');
      this.manualRefresh.emit();
    }, 100);

  }

}
