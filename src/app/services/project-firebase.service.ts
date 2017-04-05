import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Project} from "../models/Project";
import {Actortemplate} from "../models/Actortemplate";
import {Actor} from "../models/Actor";

@Injectable()
export class ProjectFirebaseService {


  PATH = "/projects"

  constructor(private af: AngularFire) { }

  getProjects() : Observable<Project []>{
    return this.af.database.list(this.PATH)
  }

  getProject(key : string) : Observable<Project>{
    return this.af.database.object(this.PATH + "/" + key)
  }

  getProjectActorTemplates(pkey : string) : Observable<Actortemplate []>{
    return this.af.database.list(this.PATH + "/" + pkey + "/actortemplates")
  }

  getProjectActorTemplate(pkey : string, atkey : string) : Observable<Actortemplate>{
    return this.af.database.object(this.PATH + "/" + pkey + "/actortemplates/" + atkey)
  }

  getProjectActorTemplateActors(pkey : string, atkey : string) : Observable<Actor []>{
    return this.af.database.list(this.PATH + "/" + pkey + "/actortemplates")
  }

  getProjectActorTemplateActor(pkey : string, atkey : string, akey : string) : Observable<Actor>{
    return this.af.database.object(this.PATH + "/" + pkey + "/actortemplates/" + atkey + "/actoren/" + akey)
  }

  saveRegistration(project : Project){
    this.af.database.list(this.PATH).push(project)
  }

  removeRegistration(project: Project){
    this.af.database.list(this.PATH).remove(project.$key);
  }

}
