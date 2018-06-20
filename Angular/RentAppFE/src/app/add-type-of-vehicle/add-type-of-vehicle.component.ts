import { Component, OnInit } from '@angular/core';
import { TypeOfVehicleService } from 'src/app/services/type-of-vehicle.service';

@Component({
  selector: 'app-add-type-of-vehicle',
  templateUrl: './add-type-of-vehicle.component.html',
  styleUrls: ['./add-type-of-vehicle.component.css'],
  providers: [TypeOfVehicleService]
})
export class AddTypeOfVehicleComponent implements OnInit {

  constructor(private typeOfVehicleService: TypeOfVehicleService) { }

  ngOnInit() {
  }

  onSubmit(formValue:any){
    console.log(formValue);
    this.typeOfVehicleService.addType(formValue.Type)
    .subscribe(
      data => {
      },
      error => {
        alert("Didn't get list of branches!");
      })
    }

}
