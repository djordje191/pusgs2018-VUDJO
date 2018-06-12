import { Component, OnInit } from '@angular/core';
import { ListOfServicesService } from 'src/app/services/list-of-services.service';
import {Services} from '../models/services.model'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-of-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.css'],
  providers:[ListOfServicesService]
})
export class ListOfServicesComponent implements OnInit {
  
  constructor(private listOfServicesService : ListOfServicesService ) { };
   public services: any;

  ngOnInit() {
    this.ListofServices();
  }

  ListofServices() {
    console.log(this.services);
    this.listOfServicesService.getListOfServices()
    .subscribe(
      data => {
        this.services=data;
      },
      error => {
        alert("Failed!");
      })
      //form.resetForm();
  }
}
