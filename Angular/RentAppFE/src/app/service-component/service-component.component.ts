import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListOfServicesService } from 'src/app/services/list-of-services.service';
import {HttpClient} from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
  providers: [ListOfServicesService]
})

export class ServiceComponentComponent implements OnInit {

  public Services: any;
  constructor(private servicesGetter:ListOfServicesService) { 
    this.getListOfServices();
  }

  ngOnInit() {
  }

  getListOfServices(){
    this.servicesGetter.getListOfServices()
    .subscribe(
      data => {
        this.Services=data;
        console.log(this.Services);
      },
      error => {
        alert("User already exists!");
      })
  }
}
