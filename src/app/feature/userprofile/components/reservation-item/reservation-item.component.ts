import { Component, OnInit, Input } from '@angular/core';
import { ReservationItem } from '../reservations/reservations.component';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.scss']
})
export class ReservationItemComponent implements OnInit {
@Input() reservation: ReservationItem;
  constructor() { }

  ngOnInit(): void {
  }

}
