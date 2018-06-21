import { Component, OnInit } from '@angular/core';
import { ListOfVehiclesService } from '../services/list-of-vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
  providers:[ListOfVehiclesService]
})
export class AddVehicleComponent implements OnInit {
  vehicleTypes:any;
  imageUrl : string = "/assets/images/Default.gif";
  fileToUpload : File = null;
  args:any;

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log("file prepared");
  }

  constructor(private vehicleService:ListOfVehiclesService, private route : ActivatedRoute,private router : Router) {
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
  }

  onSubmit(f, Image)
  {
    this.vehicleService.AddVehicle(f, this.fileToUpload, this.args.id).subscribe(
      data=>{
        console.log('done');
        Image.value=null;
        this.router.navigateByUrl('/listOfService');
      });
  }
}
