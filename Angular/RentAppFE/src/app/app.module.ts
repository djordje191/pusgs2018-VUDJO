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
import { AddTypeOfVehicleComponent } from './add-type-of-vehicle/add-type-of-vehicle.component';
import { AcceptAppUserComponent } from './accept-app-user/accept-app-user.component';
import { RentVehicleComponent } from './rent-vehicle/rent-vehicle.component';
import { AproveServiceComponent } from 'src/app/aprove-service/aprove-service.component';
import { CanActivateViaAuthGuard } from 'src/app/guard/auth.guard';

const Routes=[
  {
    path: "register",
    component: RegisterFormComponent,
    canActivate: ['CanAlwaysActivateGuard']
  },
  {
    path: "login",
    component: LoginFormComponent,
    canActivate: ['CanAlwaysActivateGuard']
  },
  {
    path: "listOfService",
    component:ServiceComponentComponent,
    children: [
      { path: "listOfBranches", component: ListOfBranchesComponent}
    ],
    canActivate:['CanAlwaysActivateGuard']
  },
  {
    path:"addServices",
    component:AddServiceComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path: "addBranch/:name/:email",
    component:AddBranchComponent,
    canActivate:[CanActivateViaAuthGuard]

  },
  {
    path: "vehicles/:id",
    component:ListOfVehiclesComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path: "addVehicle/:id",
    component:AddVehicleComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path: "editVehicle/:id",
    component:EditVehicleComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:['CanAppUserActivateGuard']
  },
  {
    path:"addTypeOfVehicle",
    component:AddTypeOfVehicleComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path:"acceptAppUsers",
    component:AcceptAppUserComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path:"rentVehicle/:serviceId/:vehicleId",
    component:RentVehicleComponent
  },
  {
    path:"aproveService",
    component:AproveServiceComponent,
    canActivate:[CanActivateViaAuthGuard]
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
    AddTypeOfVehicleComponent,
    AcceptAppUserComponent,
    RentVehicleComponent,
    AproveServiceComponent,

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
  providers: [CanActivateViaAuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide:'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      }
    },
    {
      provide:'CanAppUserActivateGuard',
      useValue: () => { if(localStorage.role !=undefined)
        return true;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
