import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import {AppUsers} from '../models/AppUsers.model'
import { error } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {
  profile:AppUsers
  imageUrl : string = "/assets/images/Default.gif"
  fileToUpload : File = null;

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.profileService.getMethodProfile()
    .subscribe(
      data=>{
        this.profile=data;
        console.log(this.profile.BirthDay);
      },
      error=>{
        alert(error.error.ModelState[""][0]);
      }
    );
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

  isDocumentSend():boolean
  {
    if(this.profile.PersonalDocument)
    {
      return true;
    }
    return false;
  }

  onSubmit(appUser:AppUsers,form:NgForm){
    console.log(appUser);
    
    appUser.Activated=false;
    appUser.Id=this.profile.Id;
    this.profileService.EditUser(appUser,this.fileToUpload, appUser.Id, this.isDocumentSend())
    .subscribe(
      data=>{
        alert("Your changes updated successfully");
      },
      error=>{
        alert(error.error.ModelState[""][0]);
      }
    );
  }

}
