import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-addproject',
  templateUrl: 'src/app/components/addproject/addproject.component.html',
  styleUrls: ['src/app/components/addproject/addproject.component.css']
})
export class AddProjectComponent implements OnInit {

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

  register(project : Project){
    this.projService.saveProject(project);
  }

}
