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
export class ListOfBranchesService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }
  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  postFile(formValues, fileToUpload:File, serviceName:string, serviceEmail:string){
    const endpoint = 'http://localhost:51680/api/AddBranch';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('Address', formValues.Address);
    formData.append('Longitude', localStorage.getItem('branchLongitude'));
    formData.append('Latitude', localStorage.getItem('branchLatitude'));
    formData.append('ServiceName', serviceName);
    formData.append('ServiceEmail', serviceEmail);
    return this.http
      .post(endpoint, formData);
  }

  getListOfBranches(email:string): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/GetBranches?serviceEmail='+email);
  }
}
