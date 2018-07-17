import { AppUsers } from './../models/AppUsers.model';
import { Component, OnInit } from '@angular/core';
import { ListOfBranchesService } from '../services/list-of-branches.service';
import { ActivatedRoute } from '@angular/router';
import { MapInfo } from '../map/map-info.model';
import { RentCarService } from 'src/app/services/rent-car.service';
import {PayPalConfig,PayPalEnvironment,PayPalIntegrationType} from 'ngx-paypal';
import { Vehicle } from '../models/Vehicle';


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
  vehicle: Vehicle;
  Id: number = -1;

  appUser: AppUsers;
  startDay: any;
  endDay: any;
  difference: number;
  pricePerHour: number;

  public payPalConfig?: PayPalConfig;

  private initConfig(): void {
  
  }

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

      this.rentService.getVehicleById(this.args.vehicleId)
      .subscribe(
        data => {
          debugger
          this.vehicle=data;
          this.pricePerHour=this.vehicle.PricePerHour;
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

  payWithPayPal(){
    debugger
    this.startDay = document.getElementsByName("StartDate")[0];
    this.endDay = document.getElementsByName("EndDate")[0];
    let diffInMs : number = Date.parse(this.endDay.value) - Date.parse(this.startDay.value);
    let diffInH : number = diffInMs / 1000 / 60 / 60;
    this.difference = diffInH;
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'Acaz2NSEuK4MmrDrOOR9DJB36XREMLHDLhlVYU_whjQuKLWlo5-xX3BNrS1olSF3KctyC6SxGw1vyo4n'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: this.pricePerHour * this.difference
        }
      }]
    });
  }
}
