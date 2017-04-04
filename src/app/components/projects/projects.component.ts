import { Component, OnInit } from '@angular/core';
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : Array<Project> = []

  constructor(private projService : ProjectFirebaseService) { }

  ngOnInit() {
      this.projService.getProjects().subscribe(res => this.projects = res)
  }

}
