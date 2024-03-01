import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Reservation } from '../models/api/reservationModel';

@Injectable({
  providedIn: 'root'
})
export class CreateReservationService {

  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation): Observable<Reservation> {
    const url = environment.base_url_res + `/res/reservations`;
    return this.http.post<any>(url, reservation).pipe(
      map((response) => {
        const createdReservation = response.data;
        createdReservation.date = new Date(response.data.date);
        return createdReservation;
      })
    );
  }
}
