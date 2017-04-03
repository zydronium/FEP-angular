import { Component, OnInit } from '@angular/core';
import {RegistrationFirebaseService} from "../../services/registration-firebase.service";
import {Registration} from "../../models/Registration";

@Component({
  selector: 'app-registerworkshop',
  templateUrl: './registerworkshop.component.html',
  styleUrls: ['./registerworkshop.component.css']
})
export class RegisterworkshopComponent implements OnInit {

  knowledgelevels = ['Senior', 'Medior', 'Junior', "Heard of it", "Never heard of it"]


  registration : Registration = null;

  constructor(private regService : RegistrationFirebaseService) {
    this.initRegistration()
  }

  initRegistration(){
    this.registration = {fullName: "", email: "", knowledgeLevel: "", presence: false}
  }

  ngOnInit() {
  }

  register(){
    this.regService.saveRegistration(this.registration)
    this.initRegistration()
  }

}
