import { Component, OnInit } from '@angular/core';
import { AppUsers } from 'src/app/models/AppUsers.model';
import {NgForm} from '@angular/forms';
import { LogInService } from 'src/app/services/log-in.service';
import { LoginData } from 'src/app/models/logInData';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LogInService]
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService:LogInService, private router : Router) { }
  
  ngOnInit() {
  }

  
  onSubmit(data:LoginData) {
    console.log(data);
    this.loginService.getTheToken(data);

    
  }

}
