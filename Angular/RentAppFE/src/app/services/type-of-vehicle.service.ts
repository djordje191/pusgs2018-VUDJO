import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeOfVehicleService {

  constructor(private httpClient:HttpClient) { }

  addType(typeName:string): Observable<any>{
    console.log(typeName)
    const endpoint = 'http://localhost:51680/api/AddVehicleType?type='+typeName;
    console.log(endpoint);
    return this.httpClient.get(endpoint);
  }
}
