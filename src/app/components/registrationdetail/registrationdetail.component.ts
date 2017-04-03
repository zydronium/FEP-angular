import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import "rxjs/add/operator/mergeMap";


import {ActivatedRoute} from "@angular/router";
import {RegistrationFirebaseService} from "../../services/registration-firebase.service";
import {Registration} from "../../models/Registration";

@Component({
  selector: 'app-registrationdetail',
  templateUrl: './registrationdetail.component.html',
  styleUrls: ['./registrationdetail.component.css']
})
export class RegistrationdetailComponent implements OnInit, OnDestroy {


  registration : Registration
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private regService : RegistrationFirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        const key = params['key'];
        this.regService.getRegistration(key)
                .subscribe( reg => {
                  this.registration = reg
                })
        })



    // Of compacter en maar 1 subscribe
    // this.sub = this.route.params
    //    .mergeMap(params => this.regService.getRegistration(params['key']))
    //    .subscribe( reg => this.registration = reg)


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
