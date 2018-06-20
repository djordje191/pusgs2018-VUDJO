import { Component, OnInit } from '@angular/core';
import { ListOfBranchesService } from '../services/list-of-branches.service';
import { ActivatedRoute } from '@angular/router';
import { MapInfo } from '../map/map-info.model';
import { RentCarService } from 'src/app/services/rent-car.service';

@Component({
  selector: 'app-rent-vehicle',
  templateUrl: './rent-vehicle.component.html',
  styleUrls: ['./rent-vehicle.component.css'],
  styles: ['agm-map {height: 500px; width: 700px;}'] //postavljamo sirinu i visinu mape
})
export class RentVehicleComponent implements OnInit {
  today:any;
  Branches:any;
  args:any;
  mapInfo:any;
  startBranch:any;
  endBranch:any;
  user:any;

  constructor(private branchService:ListOfBranchesService, private route : ActivatedRoute, private rentService:RentCarService) {
    this.route.params.subscribe(params=> this.args=params);
    this.mapInfo = new MapInfo(45.242268, 19.842954, 
      "assets/ftn.png",
      "Jugodrvo" , "" , "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
  }

  ngOnInit() {
    this.branchService.getListOfBranches(this.args.serviceId)
    .subscribe(
      data => {
        this.Branches=data;
        console.log(this.Branches);
      },
      error => {
        alert("Didn't get list of branches!");
      })

      this.rentService.getMethodProfile()
      .subscribe(
        data => {
          this.user=data;
        },
        error => {
          alert("Didn't get list of branches!");
        })
  }

  SetStartBranch(id){
    this.startBranch = id;
  }

  SetEndBranch(id){
    this.endBranch = id;
  }

  onSubmit(formValue){
    console.log(this.args, this.user.Id);
    this.rentService.createRent(formValue.EndDate, this.startBranch, this.endBranch, this.args.vehicleId, this.user.Id)
    .subscribe(
      data => {

      },
      error => {
        alert("rentService.createRent(...) Error!");
      })
  }
}