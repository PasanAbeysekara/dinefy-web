import { Injectable } from '@angular/core';
import { Event } from '../models/api/eventsModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetEventsService {
  data$: Observable<Event[]>;

  constructor(private http: HttpClient) { }

  getEventsInfo(): Observable<any> {
    if (!this.data$){
      const url = environment.base_url_data + `/data/events`;
      this.data$ = this.http.get<any>(url).pipe(
        map(data => data.data.content),
        publishReplay(1),
        refCount()
      );
    }

    return this.data$;
  }

  clearInfo(){
    this.data$ = null;
  }
}
