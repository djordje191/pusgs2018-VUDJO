import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListOfServicesService } from 'src/app/services/list-of-services.service';
import {HttpClient} from '@angular/common/http';
import { debug } from 'util';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadFileServiceService } from '../services/upload-file-service.service';
import { ListOfBranchesComponent } from '../list-of-branches/list-of-branches.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
  providers: [ListOfServicesService, UploadFileServiceService]
})

export class ServiceComponentComponent implements OnInit {
  userRole:string;
  public Services: any;
  public User:any;
  public router:Router;
  public sum : number;

  constructor(private servicesGetter:ListOfServicesService,
              private imagesGetter:UploadFileServiceService,
              private profileService:ProfileService,
              private sanitizer: DomSanitizer) { 
    this.getListOfServices();
  }

  ngOnInit() {
    console.log(this.Services);
    this.getUserInfo();
  }

  getUserInfo(){
    this.profileService.getMethodProfile()
    .subscribe(
      data => {
        this.User=data;
      },
      error => {

      })
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  onClick(name:string, email:string){
    this.router.navigate(['/addBranch', name, email]);
  }

  getListOfServices(){
    this.servicesGetter.getListOfServices()
    .subscribe(
      data => {
        this.Services=data;
        console.log('SERVISI');
        console.log(this.Services);
      },
      error => {
        alert("Didn't get list of users!");
      })
    }

  deleteService(id:any){
    this.servicesGetter.DeleteService(id)
    .subscribe(
      data => {
      },
      error => {
        alert("Didn't delete selected service!");
      })
  }
  isManager(){
    this.userRole=localStorage.getItem("role")
    if(this.userRole=="Manager"){
      return true;
    }
    else 
    return false;    
  }
  isAdmin(){
    this.userRole=localStorage.getItem("role")
    if(this.userRole=="Admin"){
      return true;
    }
    else 
    return false;    
  }

  positiveComment(formValue,serviceId)
  {
    this.servicesGetter.giveComment(this.User.Id, serviceId, formValue.Comment, false)
    .subscribe(
      data => {
      },
      error => {
        alert("Didn't get list of users!");
      })
  }
  
  canComment(comments):boolean{
    for(let c of comments)
    {
      if(c.UserKey==this.User.Id){
        return false;
      }
    }

    return true;
  }

  getRating(comments):number{
    this.sum=0;
    for(let c of comments)
    {
      if(c.IsNegative)
      {
        this.sum = this.sum - 1;
      }
      else
      {
        this.sum = this.sum + 1;
      }
    }

    return this.sum;
  }

  negativeComment(formValue,serviceId)
  {
    this.servicesGetter.giveComment(this.User.Id, serviceId, formValue.Comment, true)
    .subscribe(
      data => {
      },
      error => {
        alert("Didn't get list of users!");
      })
  }

}
