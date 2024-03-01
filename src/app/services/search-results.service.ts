import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { SearchRequest } from '../models/api/searchRequestModel';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private http: HttpClient) { }

  getSearchResults(what: number, where: string, page: number, size: number): Observable<any> {
    // const url = environment.base_url_search + `/search?what=${what}&where=${where}&page=${page}&size=${size}`;
    const url = environment.base_url_search + `/search`;


    //return this.http.get<any>(url);

    let request = new SearchRequest();
    request.what = 'dsd';
    request.when= 'dddddd';
    request.where = 'dsds';
    request.with = 'ds';
    request.eventList = [1 ,2];

    const myheader = new HttpHeaders().set('Access-Control-Allow-Origin', '*')


    return this.http.post<any>(url, request );

  }

}
