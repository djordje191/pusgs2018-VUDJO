import { Component, OnInit } from '@angular/core';
import { ListOfVehiclesService } from 'src/app/services/list-of-vehicles.service';

@Component({
  selector: 'app-disable-vehicle',
  templateUrl: './disable-vehicle.component.html',
  styleUrls: ['./disable-vehicle.component.css']
})
export class DisableVehicleComponent implements OnInit {
  Vehicles:any;

  constructor(private getVehicleService:ListOfVehiclesService) { }

  ngOnInit() {
    this.getVehicleService.getAllVehicles()
    .subscribe(
      data => {
        this.Vehicles=data;
      },
      error => {
        alert("Didn't get list of vehicles!");
    })
  }

  Disable(vehicleId){
    console.log(vehicleId);
    this.getVehicleService.getAllVehicles()
    .subscribe(
      data => {
        this.Vehicles=data;
      },
      error => {
        alert("Didn't get list of vehicles!");
    })
  }

}
