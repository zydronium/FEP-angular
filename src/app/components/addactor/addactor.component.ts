import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";

@Component({
  selector: 'app-addactor',
  templateUrl: 'addactor.component.html',
  styleUrls: ['addactor.component.css']
})
export class AddActorComponent implements OnInit {

  project : Project;
  actortemp : string = "bla";
  key : string = "bla";
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private projService : ProjectFirebaseService) { }

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
