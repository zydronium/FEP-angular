import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationFirebaseService} from "../../services/registration-firebase.service";
import {Registration} from "../../models/Registration";

@Component({
  selector: 'app-registerworkshopfieldvalidationplus',
  templateUrl: './registerworkshopfieldvalidationplus.component.html',
  styleUrls: ['./registerworkshopfieldvalidationplus.component.css']
})
export class RegisterworkshopfieldvalidationplusComponent implements OnInit {

  knowledgelevels = ['Senior', 'Medior', 'Junior', "Heard of it", "Never heard of it"]

  @ViewChild('formRef') form;

  constructor(private regService : RegistrationFirebaseService) {}


  ngOnInit() {
  }

  register(registration: Registration){
    this.regService.saveRegistration(registration);
    this.form.clear();
  }

}
