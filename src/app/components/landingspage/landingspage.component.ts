import { Component, OnInit } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-landingspage',
  templateUrl: './landingspage.component.html',
  styleUrls: ['./landingspage.component.css'],

})
export class LandingspageComponent implements OnInit {

  user = {};

  constructor(public af: AngularFire) {
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

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
