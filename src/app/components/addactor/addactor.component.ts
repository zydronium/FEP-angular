import {Component, OnInit, OnDestroy, Input, Inject} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase2 from 'firebase';


declare var firebase: any;

interface FileReaderEventTarget extends EventTarget {
  result:string
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage():string;
}

@Component({
  selector: 'app-addactor',
  templateUrl: 'addactor.component.html',
  styleUrls: ['addactor.component.css']
})

export class AddActorComponent implements OnInit {

  @Input() folder: string;
  project : Project;
  actortemplate : Actortemplate;
  actors : Array<Actor> = [];
  pkey : string = "bla";
  atkey : string = "bla";
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
    })

  }

  register(actor : Actor){
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.atkey = params['atkey'];
      this.projService.saveProjectActorTemplateActor(this.pkey, this.atkey, actor)
    })

  }

}
