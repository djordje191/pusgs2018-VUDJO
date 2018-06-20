import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOfVehiclesService } from '../services/list-of-vehicles.service';
import { AppUserServiceService } from '../services/app-user-service.service';
import { ProfileService } from '../services/profile.service';
import { RentCarService } from 'src/app/services/rent-car.service';

@Component({
  selector: 'app-list-of-vehicles',
  templateUrl: './list-of-vehicles.component.html',
  styleUrls: ['./list-of-vehicles.component.css'],
  providers:[ListOfVehiclesService]
})
export class ListOfVehiclesComponent implements OnInit {
  public args:any;
  private Vehicles:any;
  private user:any;
  userRole:string;
  private canRent:boolean;
  
  constructor(private route : ActivatedRoute,
              private vehicleService: ListOfVehiclesService,
              private currentUserService:ProfileService,
              private rentService:RentCarService) {
    this.route.params.subscribe(params=> this.args=params);
   }

  ngOnInit() {
    this.getListOfVehicles();
    this.getCurrentUser();
    this.isRentable();
  }

  getListOfVehicles(){
    this.vehicleService.getListOfVehicles(this.args.id)
    .subscribe(
      data => {
        this.Vehicles=data;
      },
      error => {
        alert("Didn't get list of vehicles!");
      })
    }

    getCurrentUser(){
      this.currentUserService.getMethodProfile()
      .subscribe(
        data => {
          this.user=data;
        },
        error => {
          alert("Didn't get list of vehicles!");
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

    isUserAccepted()
    {
      if(this.user!=undefined && this.user.IsAccepted==true)
      {
        return true;
      }
      
      return false;
    }

    isRentable()
    {
      this.rentService.checkRent(this.args.id)
      .subscribe(
        data => {
           this.canRent = data;
        },
        error => {
          alert("rentService.checkRent(id) error!");
        })
    }
}
