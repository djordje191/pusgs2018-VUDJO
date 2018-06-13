import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http:HttpClient) { }
  postFile(formValues, fileToUpload:File){
    console.log("servis usao");
    const endpoint = 'http://localhost:51680/api/Services/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('Name', formValues.Name);
    formData.append('Email', formValues.Email);
    formData.append('Description', formValues.Description);
    return this.http
      .post(endpoint, formData);
  }

  getFile(path:string): Observable<any>{
    const endpoint = 'http://localhost:51680/api/Services/GetImage?path='+path;
    return this.http
      .get(endpoint);
  }
}
