import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { ProductInfoModel } from '../models/api/productInfoModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient) { }

  getProductInfo(id: number): Observable<ProductInfoModel> {
    const url = environment.base_url_data + `/data/properties/${id}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
