import { Component, OnInit } from '@angular/core';
import {RegistrationFirebaseService} from "../../services/registration-firebase.service";
import {Registration} from "../../models/Registration";

@Component({
  selector: 'app-registerworkshopfieldvalidation',
  templateUrl: './registerworkshopfieldvalidation.component.html',
  styleUrls: ['./registerworkshopfieldvalidation.component.css']
})
export class RegisterworkshopfieldvalidationComponent implements OnInit {

  knowledgelevels = ['Senior', 'Medior', 'Junior', "Heard of it", "Never heard of it"]


  constructor(private regService : RegistrationFirebaseService) {}

  register(registration : Registration){
    this.regService.saveRegistration(registration)

  }

  ngOnInit() {
  }


}
