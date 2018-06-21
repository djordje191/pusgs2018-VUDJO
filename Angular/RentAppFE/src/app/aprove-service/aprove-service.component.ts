import { Component, OnInit } from '@angular/core';
import { AproveServiceService } from 'src/app/services/aprove-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprove-service',
  templateUrl: './aprove-service.component.html',
  styleUrls: ['./aprove-service.component.css'],
  providers:[AproveServiceService]
})
export class AproveServiceComponent implements OnInit {
  services:any;
  constructor(private aproveServiceService:AproveServiceService, private router : Router) { }

  getListOfNewServices(){
    this.aproveServiceService.GetNewServices()
    .subscribe(
      data => {
        this.services=data;
      },
      error => {
        debugger
        alert("Didn't get list of new services!");
      })
    }

    aproveService(id, isAccepted){
      this.aproveServiceService.serviceConfirmation(id, isAccepted)
      .subscribe(
        data => {
          this.aproveServiceService.GetNewServices()
          .subscribe(
            data => {
              this.services=data;
            },
            error => {
              debugger
              alert("Didn't get list of new services!");
            })
        },
        error => {
          alert("aproveService() error!");
        })
      }

  ngOnInit() {
    this.getListOfNewServices();
  }
  onSubmit(id,isAccepted)
  {
    this.aproveService(id,isAccepted);
  }

}
