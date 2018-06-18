import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from '../services/upload-file-service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  providers:[UploadFileServiceService]
})
export class UploadImageComponent implements OnInit {
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
  }

  OnSubmit(Image)
  {
    this.imageService.postFile(undefined ,this.fileToUpload).subscribe(
      data=>{
        console.log('done');
        Image.value=null;
      });
  }
}
