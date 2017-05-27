import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-addtemplate',
  templateUrl: 'addtemplate.component.html',
  styleUrls: ['addtemplate.component.css']
})
export class AddTemplateComponent implements OnInit {

  project : Project;
  actortemp : string = "bla";
  key : string = "bla";
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
        this.key = params['pkey'];
        this.projService.getProject(this.key)
            .subscribe( reg => {
              this.project = reg
            })
      })

  }

  register(actortemplate : Actortemplate){
    this.sub = this.route.params.subscribe(params => {
      this.key = params['pkey'];
      this.projService.saveProjectActorTemplate(this.key, actortemplate)
    })

  }

}
