import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AddServiceService} from 'src/app/services/add-service.service'
import {Services} from '../models/services.model'
import { UploadFileServiceService } from '../services/upload-file-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
  providers:[UploadFileServiceService]
})
export class AddServiceComponent implements OnInit {

  imageUrl : string = "/assets/images/Default.gif"
  fileToUpload : File = null;

  constructor(private imageService: UploadFileServiceService) { }

  ngOnInit() {
  }

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

  onSubmit(f, Image)
  {
    this.imageService.postFile(f, this.fileToUpload).subscribe(
      data=>{
        console.log('done');
        Image.value=null;
      });
  }

  /*onSubmit(services: Services) {
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
  }*/
}
