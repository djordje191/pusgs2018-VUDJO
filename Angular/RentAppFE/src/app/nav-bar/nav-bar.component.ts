import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterModule,
  Routes,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userRole:string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe();
   }
  
  isLoggedIn()
  {
    return localStorage.jwt;
  }

  logOut()
  {
    localStorage.clear();
  }

  ngOnInit() {
    this.getUserRole();
  }

  getUserRole()
  {
    this.userRole=localStorage.getItem("role");
  }
  isManager(){
    this.userRole=localStorage.getItem("role")
    if(this.userRole=="Manager"){
      return true;
    }
    else 
    return false;
    
  }
  isAdmin(){
    this.userRole=localStorage.getItem("role")
    if(this.userRole=="Admin"){
      return true;
    }
    else 
    return false;
    
  }
}
