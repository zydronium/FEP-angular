import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-addproject',
  templateUrl: 'addproject.component.html',
  styleUrls: ['addproject.component.css']
})
export class AddProjectComponent implements OnInit {

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
  }

  register(project : Project){
    this.projService.saveProject(project);
  }

}
