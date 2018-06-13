import { Component, OnInit } from '@angular/core';
import { AppUsers } from 'src/app/models/AppUsers.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  
  onSubmit(f: NgForm) {
    console.log(f.value.email, f.value.password);
  }

}
