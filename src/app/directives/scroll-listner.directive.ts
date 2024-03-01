import {Directive, EventEmitter, HostListener, Output, ElementRef} from '@angular/core';

@Directive({
  selector: '[appScrollListner]'
})
export class ScrollListnerDirective {
  @Output() onFocusOut: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  @HostListener('scroll')
  public onListenerTriggered(event: any): void {
    this.onFocusOut.emit(true);
  }

  @HostListener('scroll', ['$event'])
  private onScroll(event: any): void {
    this.onFocusOut.emit(event.target.scrollTop);
  }
}
