import { Injectable } from '@angular/core';
import { LocationsWrapper } from '../models/api/locationsModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetLocationsService {
  data$: Observable<LocationsWrapper>;

  constructor(private http: HttpClient) { }

  getLocationsInfo(): Observable<any> {
    if (!this.data$){
      const url = environment.baseUrl + `/data/locations`;
      this.data$ = this.http.get<any>(url).pipe(
        map(data => data.data as LocationsWrapper),
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
