import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Project} from "../models/Project";

@Injectable()
export class ProjectFirebaseService {


  PATH = "/projects"

  constructor(private af: AngularFire) { }

  getProjects() : Observable<Project []>{
    return this.af.database.list(this.PATH)
  }

  getRegistration(key : string) : Observable<Project>{
    return this.af.database.object(this.PATH +"/" + key)
  }

  saveRegistration(project : Project){
    this.af.database.list(this.PATH).push(project)
  }

  removeRegistration(project: Project){
    this.af.database.list(this.PATH).remove(project.$key);
  }

}
