import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {Services} from '../models/services.model'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListOfVehiclesService {
  public Vehicles: any;
  public args: any;
  constructor(private http: Http, private httpClient: HttpClient) {
  }

  private parseData(res: Response) {
    return res.json() || [];
  }
  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getListOfVehicles(serviceId:number): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/Services/GetVehicles?id='+serviceId);
  }

  //Vraca sve vrste tipova vozila
  getListOfVehicleTypes(): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/GetVehicleTypes');
  }

  AddVehicle(formValues, fileToUpload:File, serviceId:string){
    console.log("servis usao");
    const endpoint = 'http://localhost:51680/api/AddVehicle';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('Model', formValues.Model);
    formData.append('Manufactor', formValues.Manufactor);
    formData.append('Year', formValues.Year);
    formData.append('Description', formValues.Description);
    formData.append('Price', formValues.Price);
    formData.append('Type', formValues.Type);
    formData.append('ServiceId', serviceId);

    return this.http
      .post(endpoint, formData);
  }
}
