import { Component, OnInit } from '@angular/core';
import { AppUserServiceService } from '../services/app-user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept-app-user',
  templateUrl: './accept-app-user.component.html',
  styleUrls: ['./accept-app-user.component.css']
})
export class AcceptAppUserComponent implements OnInit {
  appUsers:any;

  constructor(private appUserService:AppUserServiceService, private router : Router) { }

  getListOfNewUsers(){
    this.appUserService.getUnconfirmedAppUsers()
    .subscribe(
      data => {
        this.appUsers=data;
      },
      error => {
        alert("Didn't get list of new users!");
      })
    }

  acceptUser(id, isAccepted){
    this.appUserService.acceptUser(id, isAccepted)
    .subscribe(
      data => {
        this.appUserService.getUnconfirmedAppUsers()
        .subscribe(
          data => {
            this.appUsers=data;
          },
          error => {
            alert("Didn't get list of new users!");
          })
      },
      error => {
        alert("acceptUser() error!");
      })
    }

  ngOnInit() {
    this.getListOfNewUsers();
  }

  onSubmit(id,isAccepted)
  {
    this.acceptUser(id,isAccepted);
  }
}
