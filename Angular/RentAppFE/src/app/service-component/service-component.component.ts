import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListOfServicesService } from 'src/app/services/list-of-services.service';
import {HttpClient} from '@angular/common/http';
import { debug } from 'util';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadFileServiceService } from '../services/upload-file-service.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
  providers: [ListOfServicesService, UploadFileServiceService]
})

export class ServiceComponentComponent implements OnInit {

  public Services: any;

  constructor(private servicesGetter:ListOfServicesService, private imagesGetter:UploadFileServiceService, private sanitizer: DomSanitizer) { 
    this.getListOfServices();
  }

  ngOnInit() {
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getListOfServices(){
    this.servicesGetter.getListOfServices()
    .subscribe(
      data => {
        this.Services=data;
        console.log(this.Services);
      },
      error => {
        alert("Didn't get list of users!");
      })

      /*this.imagesGetter.getFile("Vehicle182414519.jpg").subscribe(
        data=>{
          console.log("getImage prosao");
        },
        error => {
          alert("Didn't get the image!");
        }
      )*/
  }
}
