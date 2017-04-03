import { Component, OnInit } from '@angular/core';
import {Registration} from "../../models/Registration";
import {RegistrationFirebaseService} from "../../services/registration-firebase.service";

@Component({
  selector: 'app-registerworkshopformvalidation',
  templateUrl: './registerworkshopformvalidation.component.html',
  styleUrls: ['./registerworkshopformvalidation.component.css']
})
export class RegisterworkshopformvalidationComponent implements OnInit {

  knowledgelevels = ['Senior', 'Medior', 'Junior', "Heard of it", "Never heard of it"]


  constructor(private regService : RegistrationFirebaseService) {}

  register(registration : Registration){
    this.regService.saveRegistration(registration)

  }

  ngOnInit() {
  }


}
