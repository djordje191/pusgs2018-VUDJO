import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AddServiceService} from 'src/app/services/add-service.service'
import {Services} from '../models/services.model'

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
  providers:[AddServiceService]
})
export class AddServiceComponent implements OnInit {

  constructor(private addServiceService: AddServiceService) { }

  ngOnInit() {
  }

  onSubmit(services: Services) {
    console.log(services);
    this.addServiceService.postService(services)
    .subscribe(
      data => {
        alert(data);
      },
      error => {
        alert("Service already exists!");
      })
      //form.resetForm();
  }
}
