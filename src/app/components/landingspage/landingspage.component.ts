import { Component, OnInit } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-landingspage',
  templateUrl: './landingspage.component.html',
  styleUrls: ['./landingspage.component.css'],

})
export class LandingspageComponent implements OnInit {

  user = {};
  loggedin = false;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
        this.loggedin = true;
      }
      else {
        // user not logged in
        this.user = {};
        this.loggedin = false;
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
