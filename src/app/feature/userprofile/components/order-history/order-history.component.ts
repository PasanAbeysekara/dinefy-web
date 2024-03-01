import { Component, OnInit, Input } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  @Input() cols: number = 4;
  @Input('cols.xs') cols_xs: number = 1;
  @Input('cols.sm') cols_sm: number = 2;
  @Input('cols.md') cols_md: number = 3;
  @Input('cols.lg') cols_lg: number = 4;
  @Input('cols.xl') cols_xl: number = 6;
  @Input() rowHeight: number = 1;
  @Input() tileHeight: number = 0.9;
  @Input() gutterSize: number = 1;

  mediaWatcher: Subscription;

  constructor(public dialog: MatDialog, private media: MediaObserver) { }

  reservationHistory = [
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'ident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: ''
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'ident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: ''
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'ident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: ''
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'ident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: ''
    },
    {
      id: 'item_1',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      user: 'user name',
      price: 'LKR 6,500',
      paxCount: '2 Adults, 1 Child',
      reviewComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
  ];


  ngOnInit(): void {
    this.mediaWatcher = this.media.media$.subscribe((change: MediaChange) => {
      this.cols = this[`cols_${change.mqAlias}`];
    });
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

}

export class OrderHistoryItemModel {
  id: any;
  name: any;
  date: any;
  time: any;
  user: any;
  price: any;
  paxCount: any;
  reviewComment: any;
}
