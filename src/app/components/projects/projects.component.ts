import { Component, OnInit } from '@angular/core';
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : Array<Project> = [];
  user = {};

constructor(public af: AngularFire, private projService : ProjectFirebaseService) {
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
      this.projService.getProjects().subscribe(res => this.projects = res)
  }

  archive(project : Project){
    project.isArchived = true;
    this.projService.updateProject(project.$key, project);

  }

}
