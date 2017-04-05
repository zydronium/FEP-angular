import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import "rxjs/add/operator/mergeMap";


import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";

@Component({
    selector: 'app-actordetails',
    templateUrl: './actordetails.component.html',
    styleUrls: ['./actordetails.component.css']
})
export class ActordetailsComponent implements OnInit, OnDestroy {


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

        this.projService.getProjectActorTemplateActors(this.pkey,this.atkey).subscribe(res => this.actors = res)

        // Of compacter en maar 1 subscribe
        // this.sub = this.route.params
        //    .mergeMap(params => this.regService.getRegistration(params['key']))
        //    .subscribe( reg => this.registration = reg)


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
