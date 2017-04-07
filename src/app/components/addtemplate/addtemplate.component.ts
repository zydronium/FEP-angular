import { Component, OnInit } from '@angular/core';
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";

@Component({
  selector: 'app-addtemplate',
  templateUrl: 'addtemplate.component.html',
  styleUrls: ['addtemplate.component.css']
})
export class AddTemplateComponent implements OnInit {

  projects : Array<Project> = []

  constructor(private projService : ProjectFirebaseService) { }

  ngOnInit() {
      this.projService.getProjects().subscribe(res => this.projects = res)
  }

}
