import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AproveServiceService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  GetNewServices(): Observable<any> {
    return this.httpClient.get("http://localhost:51680/api/Services/GetServices");
  }

  serviceConfirmation(id,accepted): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services/AproveService?id='+id+'&isAccepted='+accepted);
  }
}
