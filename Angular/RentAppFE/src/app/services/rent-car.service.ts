import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentCarService {

  constructor(private http: Http,private httpClient: HttpClient) { }

  getMethodProfile():Observable<any>{
    return this.httpClient.get("http://localhost:51680/api/AppUsers/GetCurrentUser");
  }

  createRent(EndDate, StartBranchId, EndBranchId, VehicleId, UserId ): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/RentVehicle/Rent?EndDate='+EndDate+'&StartBranchId='+StartBranchId+'&EndBranchId='+EndBranchId+'&VehicleId='+VehicleId+'&UserId='+UserId);
  }

  checkRent(ServiceId): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/RentVehicle/CheckRentForVehicle?ServiceId='+ServiceId);
  }
  getVehicleById(Id: number): Observable<any> {
    return this.httpClient.get('http://localhost:51680/api/GetVehicle?Id='+Id)
 }
}
