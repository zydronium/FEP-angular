import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";

@Component({
  selector: 'app-edittemplate',
  templateUrl: 'edittemplate.component.html',
  styleUrls: ['edittemplate.component.css']
})
export class EditTemplateComponent implements OnInit {

  project : Project;
  actortemplate : Actortemplate;
  pkey : string = "bla";
  atkey : string = "bla";
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
    })

  }

  register(){
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.atkey = params['atkey'];
      this.projService.updateProjectActorTemplate(this.pkey, this.atkey, this.actortemplate)
    })

  }

}
