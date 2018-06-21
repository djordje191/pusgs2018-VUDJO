import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ListOfVehiclesService } from 'src/app/services/list-of-vehicles.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  vehicleTypes:any;
  Vehicles:any;
  price:any;

  constructor(private searchService:SearchService, private vehicleService:ListOfVehiclesService) { }

  ngOnInit() {
    this.vehicleService.getListOfVehicleTypes()
    .subscribe(
      data => {
        this.vehicleTypes=data;
        console.log(this.vehicleTypes);
      },
      error => {
        alert("Didn't get list of vehicle types!");
      })
  }

  onSubmit(formValue){
    this.price = formValue.Price;
    if(this.price==undefined || this.price=='')
    {
        this.price=0;
    }

    this.searchService.search(formValue.Type,this.price)
    .subscribe(
      data => {
        this.Vehicles=data;
        console.log(this.vehicleTypes);
      },
      error => {
        alert("Didn't get list of vehicle types!");
      })
  }

}
