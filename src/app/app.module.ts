import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LandingspageComponent } from './components/landingspage/landingspage.component';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
import { MaterialModule } from "@angular/material";
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { TemplatedetailsComponent } from './components/templatedetails/templatedetails.component';
import { ActordetailsComponent } from './components/actordetails/actordetails.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddTemplateComponent } from './components/addtemplate/addtemplate.component';
import { AddActorComponent } from './components/addactor/addactor.component';
import { ProjectFirebaseService } from "./services/project-firebase.service";
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
  {path:'', component: ProjectsComponent},
  {path:'project', component: ProjectsComponent},
  {path:'project/:pkey', component: ProjectdetailsComponent},
  {path:'project/:pkey/template/add', component: AddTemplateComponent},
  {path:'project/:pkey/template/:atkey', component: TemplatedetailsComponent},
  {path:'project/:pkey/template/:atkey/actor/add', component: AddActorComponent},
  {path:'project/:pkey/template/:atkey/actor/:akey', component: ActordetailsComponent},
  {path:'inputstates', component: StateinputsexampleComponent}
]


@NgModule({
  declarations: [
    LandingspageComponent,
    ProjectdetailsComponent,
    TemplatedetailsComponent,
    ActordetailsComponent,
    AddTemplateComponent,
    AddActorComponent,
    ProjectsComponent,
    StateinputsexampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    RouterModule.forRoot(routes),
    MaterialModule,
  ],
  providers: [ProjectFirebaseService],
  bootstrap: [LandingspageComponent]
})
export class AppModule { }
