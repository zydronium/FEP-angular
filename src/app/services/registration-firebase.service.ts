import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Registration} from "../models/Registration";

@Injectable()
export class RegistrationFirebaseService {


  PATH = "/registrations"

  constructor(private af: AngularFire) { }

  getRegistrations() : Observable<Registration []>{
    return this.af.database.list(this.PATH)
  }

  getRegistration(key : string) : Observable<Registration>{
    return this.af.database.object(this.PATH +"/" + key)
  }

  saveRegistration(registration : Registration){
    this.af.database.list(this.PATH).push(registration)
  }

  removeRegistration(registration: Registration){
    this.af.database.list(this.PATH).remove(registration.$key);
  }

}
