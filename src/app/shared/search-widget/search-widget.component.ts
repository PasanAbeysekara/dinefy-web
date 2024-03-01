import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {
  openSearch: boolean;
  time = {hour: 13, minute: 30};
  meridian = true;
  constructor() { }

  ngOnInit(): void {
    this.openSearch = false;
  }
  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    this.openSearch = false;
    console.log(this.openSearch);
  }

  searchToggle() {
    if (window.pageYOffset > 150) {
      window.scroll({
        top: 0,
      });
    }
    this.openSearch = true;
  }

}
