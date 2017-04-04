import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LandingspageComponent } from './components/landingspage/landingspage.component';
import { AngularFireModule } from "angularfire2";
import { MaterialModule } from "@angular/material";
import { RegistrationsComponent } from './components/registrations/registrations.component';
import { RegistrationFirebaseService } from "./services/registration-firebase.service";
import { RegistrationdetailComponent } from './components/registrationdetail/registrationdetail.component';
import { RegisterworkshopComponent } from './components/registerworkshop/registerworkshop.component';
import { RegisterworkshopformvalidationComponent } from './components/registerworkshopformvalidation/registerworkshopformvalidation.component';
import { RegisterworkshopfieldvalidationComponent } from './components/registerworkshopfieldvalidation/registerworkshopfieldvalidation.component';
import { RegisterworkshopfieldvalidationplusComponent } from './components/registerworkshopfieldvalidationplus/registerworkshopfieldvalidationplus.component';
import { StateinputsexampleComponent } from './components/stateinputsexample/stateinputsexample.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



export const firebaseConfig = {
  apiKey: "AIzaSyA3sd3JDXwINw8FXBaZP_phL-Gi3mD0lVg",
  authDomain: "actortemplateapp-8ce47.firebaseapp.com",
  databaseURL: "https://actortemplateapp-8ce47.firebaseio.com",
  projectId: "actortemplateapp-8ce47",
  storageBucket: "actortemplateapp-8ce47.appspot.com",
  messagingSenderId: "203307171519"
};


const routes = [
  {path:'', component: RegistrationsComponent},
  {path:'registrations', component: RegistrationsComponent},
  {path:'registerworkshop', component: RegisterworkshopComponent},
  {path:'registerworkshopformvalidation', component: RegisterworkshopformvalidationComponent},
  {path:'registerworkshopfieldvalidation', component: RegisterworkshopfieldvalidationComponent},
  {path:'registeronworkshopfieldvalidationplus', component: RegisterworkshopfieldvalidationplusComponent},
  {path:'inputstates', component: StateinputsexampleComponent},

  {path:'registrationdetail/:key', component: RegistrationdetailComponent}
]


@NgModule({
  declarations: [
    LandingspageComponent,
    RegistrationdetailComponent,
    RegistrationsComponent,
    RegisterworkshopComponent,
    RegisterworkshopformvalidationComponent,
    RegisterworkshopfieldvalidationComponent,
    RegisterworkshopfieldvalidationplusComponent,
    StateinputsexampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    MaterialModule,
  ],
  providers: [RegistrationFirebaseService],
  bootstrap: [LandingspageComponent]
})
export class AppModule { }
