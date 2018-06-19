import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Users} from '../models/User.model'
import { SignUpServiceService } from 'src/app/services/sign-up-service.service';
import {AppUsers} from '../models/AppUsers.model'


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers:[SignUpServiceService]
})
export class RegisterFormComponent implements OnInit {
  imageUrl : string = "/assets/images/Default.gif"
  fileToUpload : File = null;
  isValid : Boolean;
  constructor(private signUpServiceService: SignUpServiceService) { }
  ;
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

  onSubmit(appUser: Users) {
    console.log(appUser);
    this.signUpServiceService.postUser(appUser)
    .subscribe(
      data => {
        alert("You have been successfully registered!");
      },
      error => {
        alert("User already exists!");
      })
  }
}
