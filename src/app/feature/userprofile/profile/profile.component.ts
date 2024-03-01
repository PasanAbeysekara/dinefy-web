import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog, public changeDetectorRef: ChangeDetectorRef, public sharedService: SharedService) { }

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
    const element = document.getElementById('navbar');
    element.classList.add('sticky');
    element.classList.remove('home-header');

  }

  test(event){
    this.sharedService.tabSelection.next(event);
  }

}
