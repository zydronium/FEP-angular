import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";

@Component({
  selector: 'app-edittemplate',
  templateUrl: 'src/app/components/editproject/editproject.component.html',
  styleUrls: ['src/app/components/editproject/editproject.component.css']
})
export class EditProjectComponent implements OnInit {

  project : Project;
  pkey : string = "bla";
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private projService : ProjectFirebaseService) { }

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
