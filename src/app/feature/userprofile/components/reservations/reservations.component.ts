import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations = [
    {
      image: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      username: 'User Name',
      capacity: '2 Adults, 1 Child',
      price: 'LKR 6,500',
      status: 'Reserved'
    },
    {
      image: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      username: 'User Name',
      capacity: '2 Adults, 1 Child',
      price: 'LKR 6,500',
      status: 'Booked'
    },
    {
      image: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      username: 'User Name',
      capacity: '2 Adults, 1 Child',
      price: 'LKR 6,500',
      status: 'Cancel'
    },
    {
      image: 'https://cf.bstatic.com/images/hotel/max1024x768/170/170102675.jpg',
      name: 'A Minute by Tuk Tuk Colombo',
      date: '28 Dec, 2020',
      time: '10.30 AM',
      username: 'User Name',
      capacity: '2 Adults, 1 Child',
      price: 'LKR 6,500',
      status: 'Pending'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface ReservationItem{
  image: string;
  name: string;
  date: string;
  time: string;
  username: string;
  capacity: string;
  price: string;
  status: string;
}
