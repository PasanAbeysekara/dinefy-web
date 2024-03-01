import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { PropMenuWraper } from '../models/ui/propMenuWrapper';

@Injectable({
  providedIn: 'root'
})
export class GetPropertyMenusService {

  constructor(private http: HttpClient) { }

  getProductMenus(code: string): Observable<PropMenuWraper> {
    const url = environment.base_url_data + `/data/properties/${code}/menus`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
