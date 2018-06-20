import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppUserServiceService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  getUnconfirmedAppUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/AppUsers/GetAppUsers');
  }

  acceptUser(id,accepted): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/AppUsers/AcceptUser?id='+id+'&isAccepted='+accepted);
  }
}
