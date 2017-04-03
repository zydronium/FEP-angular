import { Component, OnInit } from '@angular/core';
import {RegistrationFirebaseService} from "../../services/registration-firebase.service";
import {Registration} from "../../models/Registration";

@Component({
  selector: 'app-registrations',
  templateUrl: 'registrations.component.html',
  styleUrls: ['registrations.component.css']
})
export class RegistrationsComponent implements OnInit {

  registrations : Array<Registration> = []

  constructor(private regService : RegistrationFirebaseService) { }

  ngOnInit() {
      this.regService.getRegistrations().subscribe(res => this.registrations = res)
  }

  removeRegistration(reg: Registration){
    this.regService.removeRegistration(reg)
  }

}
