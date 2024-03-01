import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { Facilities } from '../models/api/productInfoModel';

@Injectable({
  providedIn: 'root'
})
export class GetFacilitiesService {
  data$: Observable<Facilities[]>;

  constructor(private http: HttpClient) { }

  getFacilitiesInfo(): Observable<any> {
    if (!this.data$){
      const url = environment.base_url_data + `/data/facilities`;
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
