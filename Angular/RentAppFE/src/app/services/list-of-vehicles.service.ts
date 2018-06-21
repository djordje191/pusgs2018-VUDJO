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

  getAllVehicles(): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/GetAllVehicles');
  }

  //Vraca sve vrste tipova vozila
  getListOfVehicleTypes(): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/GetVehicleTypes');
  }

  getVehiclePage(pageNumber, serviceId):Observable<any>{
    console.log(serviceId);
    return this.http.get('http://localhost:51680/api/Vehicles?pageIndex='+pageNumber+'&pageSize='+4+'&serviceId='+serviceId)
    .map(this.parseData)
    .catch(this.handleError);
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

  updateVehicle(vehicle:any, id:any){
    const endpoint = 'http://localhost:51680/api/Vehicles/EditVehicle';
    const formData: FormData = new FormData();
    formData.append('Manufactor', vehicle.Manufactor);
    formData.append('Model', vehicle.Model);
    formData.append('Type', vehicle.Type);
    formData.append('PricePerHour', vehicle.PricePerHour);
    formData.append('Year', vehicle.Year);
    formData.append('Id', id);
    formData.append('Description', vehicle.Description);
    return this.http.post(endpoint, formData);
  }

  //Preuzima vozilo na osnovu prosledjenog ID-a
  getVehicle(id:string): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/GetVehicle?id='+id);
  }
}
