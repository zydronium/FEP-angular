import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-editactor',
  templateUrl: 'editactor.component.html',
  styleUrls: ['editactor.component.css']
})
export class EditActorComponent implements OnInit {

  project : Project;
  actortemplate : Actortemplate;
  actor : Actor;
  pkey : string = "bla";
  atkey : string = "bla";
  akey : string = "bla";
  private sub: Subscription;
  user = {};

  constructor(public af: AngularFire, private route: ActivatedRoute, private projService : ProjectFirebaseService) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.projService.getProject(this.pkey)
          .subscribe( reg => {
            this.project = reg
          });
      this.atkey = params['atkey'];
      this.projService.getProjectActorTemplate(this.pkey,this.atkey)
          .subscribe( reg => {
            this.actortemplate = reg
          })
      this.akey = params['akey'];
      this.projService.getProjectActorTemplateActor(this.pkey,this.atkey,this.akey)
          .subscribe( reg => {
            this.actor = reg
          })
    })

  }

  register(){
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.atkey = params['atkey'];
      this.akey = params['akey'];
      this.projService.updateProjectActorTemplateActor(this.pkey, this.atkey, this.akey, this.actor)
    })

  }

}
