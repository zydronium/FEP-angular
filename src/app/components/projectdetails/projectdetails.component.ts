import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import "rxjs/add/operator/mergeMap";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actortemplate} from "../../models/Actortemplate";

@Component({
    selector: 'app-projectdetails',
    templateUrl: './projectdetails.component.html',
    styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit, OnDestroy {


    project : Project;
    actortemplates : Array<Actortemplate> = [];
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

        this.projService.getProjectActorTemplates(this.key).subscribe(res => this.actortemplates = res)

        // Of compacter en maar 1 subscribe
        // this.sub = this.route.params
        //    .mergeMap(params => this.regService.getRegistration(params['key']))
        //    .subscribe( reg => this.registration = reg)


    }

    archive(actortemplate : Actortemplate){
        this.sub = this.route.params.subscribe(params => {
            this.key = params['pkey'];
            actortemplate.isArchived = true;
            this.projService.updateProjectActorTemplate(this.key, actortemplate.$key, actortemplate)
        })

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
