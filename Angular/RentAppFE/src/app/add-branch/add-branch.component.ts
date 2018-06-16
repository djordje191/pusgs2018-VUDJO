import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from '../services/upload-file-service.service';
import { ActivatedRoute } from "@angular/router";
import { ListOfBranchesService } from '../services/list-of-branches.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  private args:any;
  imageUrl : string = "/assets/images/Default.gif"
  fileToUpload : File = null;

  constructor(private imageService : UploadFileServiceService,
              private route : ActivatedRoute,
              private branchService : ListOfBranchesService) { 
    this.route.params.subscribe(params=> this.args=params);
    console.log(this.args);
  }

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
    this.branchService.postFile(f, this.fileToUpload, this.args.name, this.args.email)
      .subscribe(
        data=>{
        console.log('done');
        Image.value=null;
      });
  }
}
