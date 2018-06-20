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
import { AddBranchComponent } from './add-branch/add-branch.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ListOfVehiclesComponent } from './list-of-vehicles/list-of-vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { ProfileComponent } from './profile/profile.component';
import { TokenInterceptor } from 'src/app/interceptors/interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AcceptAppUserComponent } from './accept-app-user/accept-app-user.component';
import { RentVehicleComponent } from './rent-vehicle/rent-vehicle.component';

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
  },
  {
    path: "addBranch/:name/:email",
    component:AddBranchComponent
  },
  {
    path: "vehicles/:id",
    component:ListOfVehiclesComponent
  },
  {
    path: "addVehicle/:id",
    component:AddVehicleComponent
  },
  {
    path: "editVehicle/:id",
    component:EditVehicleComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"acceptAppUsers",
    component:AcceptAppUserComponent
  },
  {
    path:"rentVehicle/:serviceId/:vehicleId",
    component:RentVehicleComponent
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
    ListOfBranchesComponent,
    AddBranchComponent,
    MapComponent,
    ListOfVehiclesComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    ProfileComponent,
    AcceptAppUserComponent,
    RentVehicleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk'})
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
