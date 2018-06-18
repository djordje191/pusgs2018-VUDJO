import { Component, OnInit } from '@angular/core';
import { ListOfVehiclesService } from 'src/app/services/list-of-vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css'],
  providers: [ListOfVehiclesService]
})
export class EditVehicleComponent implements OnInit {
  public vehicle:any;
  public args:any;
  public vehicleTypes:any;

  constructor(private vehicleService:ListOfVehiclesService, private route : ActivatedRoute) {
    this.route.params.subscribe(params=> this.args=params);
    vehicleService.getListOfVehicleTypes()
    .subscribe(
      data => {
        this.vehicleTypes=data;
        console.log(this.vehicleTypes);
      },
      error => {
        alert("Didn't get list of vehicle types!");
      })
  }

  ngOnInit() {
    this.vehicle = this.vehicleService.getVehicle(this.args.id).subscribe(
      data=>{
        console.log(data);
        this.vehicle=data;
      });
  }

  onSubmit() {
    this.vehicleService.updateVehicle(this.vehicle, this.args.id)
    .subscribe(
      data => {
      },
      error => {
        console.log(error);
      })
  }
}
