import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { map, tap, shareReplay, publishReplay, refCount } from 'rxjs/operators';
import { Tags } from '../models/api/tagsModel';

@Injectable({
  providedIn: 'root'
})
export class GetTagsService {

  data$: Observable<Tags[]>;

  constructor(private http: HttpClient) { }

  getTagsInfo(): Observable<any> {
    if (!this.data$){
      const url = environment.baseUrl + `/data/tags`;
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

