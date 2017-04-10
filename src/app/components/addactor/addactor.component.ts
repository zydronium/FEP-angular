import {Component, OnInit, OnDestroy, Input, Inject} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";


declare var firebase: any;

@Component({
  selector: 'app-addactor',
  templateUrl: 'addactor.component.html',
  styleUrls: ['addactor.component.css']
})
export class AddActorComponent implements OnInit {

  @Input() folder: string;
  project : Project;
  actortemplate : Actortemplate;
  actors : Array<Actor> = [];
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

  register(actor : Actor){
    this.sub = this.route.params.subscribe(params => {
      this.pkey = params['pkey'];
      this.atkey = params['atkey'];

      // Create a root reference
      //let storageRef = firebase.storage().ref();

      let success = false;
      // This currently only grabs item 0, TODO refactor it to grab them all
      for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
        //let path = `/actors/${selectedFile.name}`;
        //var iRef = storageRef.child(path);
        /*iRef.put(selectedFile).then((snapshot) => {
          actor.path = path;
          actor.filename = selectedFile.name;
        });*/
        //var base64textString=  btoa(encodeURIComponent(selectedFile));
        //actor.foto = base64textString;
      }

      this.projService.saveProjectActorTemplateActor(this.pkey, this.atkey, actor)
    })

  }

}
