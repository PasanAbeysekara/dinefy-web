import { Injectable } from '@angular/core';
import { Choice } from '../models/api/choicesModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetChoicesService {
  data$: Observable<Choice[]>;

  constructor(private http: HttpClient) { }

  getChoicesInfo(): Observable<any> {
    if (!this.data$){
      const url = environment.base_url_data + `/data/choices`;
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
