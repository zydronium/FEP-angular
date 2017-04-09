import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Project} from "../models/Project";
import {Actortemplate} from "../models/Actortemplate";
import {Actor} from "../models/Actor";

@Injectable()
export class ProjectFirebaseService {

  constructor(private af: AngularFire) { }

  getProjects() : Observable<Project []>{
    return this.af.database.list("/projects")
  }

  getProject(key : string) : Observable<Project>{
    return this.af.database.object("/projects/" + key)
  }

  getProjectActorTemplates(pkey : string) : Observable<Actortemplate []>{
    return this.af.database.list("/projects/" + pkey + "/actortemplates")
  }

  getProjectActorTemplate(pkey : string, atkey : string) : Observable<Actortemplate>{
    return this.af.database.object("/projects/" + pkey + "/actortemplates/" + atkey)
  }

  getProjectActorTemplateActors(pkey : string, atkey : string) : Observable<Actor []>{
    return this.af.database.list("/projects/" + pkey + "/actortemplates/" + atkey + "/actoren")
  }

  getProjectActorTemplateActor(pkey : string, atkey : string, akey : string) : Observable<Actor>{
    return this.af.database.object("/projects/" + pkey + "/actortemplates/" + atkey + "/actoren/" + akey)
  }

  saveProjectActorTemplate(pkey : string, actortemplate : Actortemplate){
    this.af.database.list("/projects/" + pkey + "/actortemplates").push(actortemplate)
  }

  saveProjectActorTemplateActor(pkey : string, atkey : string, actor : Actor){
    this.af.database.list("/projects/" + pkey + "/actortemplates/" + atkey + "/actoren").push(actor)
  }

  updateProjectActorTemplate(pkey : string, atkey : string, actortemplate : Actortemplate){
    this.af.database.list("/projects/" + pkey + "/actortemplates").push(actortemplate)
  }

  updateProjectActorTemplateActor(pkey : string, atkey : string, akey : string, actor : Actor){
    this.af.database.list("/projects/" + pkey + "/actortemplates/" + atkey + "/actoren").push(actor)
  }

  removeRegistration(project: Project){
    this.af.database.list("/projects").remove(project.$key);
  }

}
