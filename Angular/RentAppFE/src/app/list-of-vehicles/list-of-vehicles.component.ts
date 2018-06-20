import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOfVehiclesService } from '../services/list-of-vehicles.service';

@Component({
  selector: 'app-list-of-vehicles',
  templateUrl: './list-of-vehicles.component.html',
  styleUrls: ['./list-of-vehicles.component.css'],
  providers:[ListOfVehiclesService]
})
export class ListOfVehiclesComponent implements OnInit {
  public args:any;
  private Vehicles:any;
  userRole:string;
  
  constructor(private route : ActivatedRoute, private vehicleService: ListOfVehiclesService) {
    this.route.params.subscribe(params=> this.args=params);
   }

  ngOnInit() {
    this.getListOfVehicles();
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
    isManager(){
      this.userRole=localStorage.getItem("role")
      if(this.userRole=="Manager"){
        return true;
      }
      else 
      return false;
      
    }
}
