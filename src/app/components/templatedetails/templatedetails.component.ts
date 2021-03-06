import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import "rxjs/add/operator/mergeMap";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";
import {Actor} from "../../models/Actor";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-templatedetails',
    templateUrl: './templatedetails.component.html',
    styleUrls: ['./templatedetails.component.css']
})
export class TemplatedetailsComponent implements OnInit, OnDestroy {


    project : Project;
    actortemplate : Actortemplate;
    actors : Array<Actor> = [];
    pkey : string = "bla";
    atkey : string = "bla";
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

    archive(actor : Actor){
        this.sub = this.route.params.subscribe(params => {
            this.pkey = params['pkey'];
            this.atkey = params['atkey'];
            actor.isArchived = true;
            this.projService.updateProjectActorTemplateActor(this.pkey, this.atkey, actor.$key, actor)
        })

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
