import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {Services} from '../models/services.model'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListOfServicesService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }
  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getListOfServices(): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services');
  }

  DeleteService(id:string): Observable<any> {
      const endpoint = 'http://localhost:51680/api/Services/DeleteService';
      const formData: FormData = new FormData();
      formData.append('ServiceId', id);
      return this.http.post(endpoint, formData);
  }

}
