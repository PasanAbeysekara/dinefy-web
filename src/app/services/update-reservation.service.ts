import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Reservation } from '../models/api/reservationModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateReservationService {

  constructor(private http: HttpClient) { }

  updateReservation(reservation: Reservation, id: number): Observable<Reservation> {
    const url = environment.base_url_res + `/res/reservations/${id}`;
    return this.http.put<any>(url, reservation).pipe(
      map((response) => {
        const updatedReservation = response.data;
        updatedReservation.date = new Date(response.data.date);
        return updatedReservation;
      })
    );
  }
}
