import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  search(type,price): Observable<any> {
    const endpoint = 'http://localhost:51680/api/Services/Search?type='+type+'&price='+price;
    console.log("Endpoint: "+endpoint);
    return this.httpClient.get(endpoint);
  }
}
