import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-editproject',
  templateUrl: 'editproject.component.html',
  styleUrls: ['editproject.component.css']
})
export class EditProjectComponent implements OnInit {

  project : Project;
  pkey : string = "bla";
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
    })

  }

  register(){
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.projService.updateProject(this.pkey, this.project)
    })

  }

}
