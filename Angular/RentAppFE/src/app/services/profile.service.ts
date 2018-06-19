import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AppUsers } from 'src/app/models/AppUsers.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:Http,private HttpClient:HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getMethodProfile():Observable<any>{
    return this.HttpClient.get("http://localhost:51680/api/AppUsers/GetCurrentUser");
  }
  putMethodProfile(id,newMember):Observable<any>{
    return this.HttpClient.put("http://localhost:51680/api/AppUsers"+id,newMember);
  }

  EditUser(formValues:AppUsers, fileToUpload:File, userId:number, isDocumentSend:boolean){
    console.log("servis usao");
    const endpoint = 'http://localhost:51680/api/AppUsers/EditUser';
    const formData: FormData = new FormData();
    if(!isDocumentSend)
    {
      formData.append('Image', fileToUpload, fileToUpload.name);
    }
    
    formData.append('FullName', formValues.FullName.toString());
    formData.append('BirthDay', formValues.BirthDay.toString());
    formData.append('Email', formValues.Email.toString());
    formData.append('AppUserId', userId.toString());

    return this.http
      .post(endpoint, formData);
  }
}
