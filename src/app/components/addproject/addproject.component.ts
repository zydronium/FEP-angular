import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";

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

  register(project : Project){
    this.projService.saveProject(project);
  }

}
