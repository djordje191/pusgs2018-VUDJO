import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Router, RouterModule, Routes, ActivatedRoute
} from '@angular/router';
import { HashLocationStrategy, LocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BranchComponent } from './branch/branch.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ClockComponent } from './get-clock-time/get-clock-time.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import {ListOfBranchesComponent} from './list-of-branches/list-of-branches.component'
import { UploadImageComponent } from './upload-image/upload-image.component';

const Routes=[
  {
    path: "register",
    component: RegisterFormComponent
  },
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "listOfService",
    component:ServiceComponentComponent,
    children: [
      { path: "listOfBranches", component: ListOfBranchesComponent}
    ]
  },
  {
    path:"addServices",
    component:AddServiceComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    BranchComponent,
    VehicleComponent,
    AddServiceComponent,
    ClockComponent,
    ServiceComponentComponent,
    UploadImageComponent,
    ListOfBranchesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    RouterModule.forRoot(Routes),
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
