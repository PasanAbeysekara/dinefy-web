import { Injectable } from '@angular/core';
import { Cuisine } from '../models/api/cuisinesModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCuisinesService {
  data$: Observable<Cuisine[]>;

  constructor(private http: HttpClient) { }

  getCusinesInfo(): Observable<any> {
    if (!this.data$){
      const url = environment.base_url_data + `/data/specialities`;
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
