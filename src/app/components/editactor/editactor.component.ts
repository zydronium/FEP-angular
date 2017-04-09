import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";

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

  constructor(private route: ActivatedRoute, private projService : ProjectFirebaseService) { }

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

  register(actor : Actor){
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.atkey = params['atkey'];
      this.projService.saveProjectActorTemplateActor(this.pkey, this.atkey, actor)
    })

  }

}
