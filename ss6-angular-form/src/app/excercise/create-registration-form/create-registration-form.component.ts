import {Component, OnInit, Output,EventEmitter} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-create-registration-form',
  templateUrl: './create-registration-form.component.html',
  styleUrls: ['./create-registration-form.component.css']
})
export class CreateRegistrationFormComponent implements OnInit {

  customer: Customer = {
    id: 1,
    username: 'Tuấn',
    password: '123',
    dateOfBirth: '1995-28-08',
    hobbies: 'cầu lông',
    introduction: 'C0822G1'
  }
  @Output() customerSubmit = new EventEmitter();

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      id: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      hobbies: new FormControl("", Validators.required),
      introduction: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
  }

  createCustomerWithReactive(){
    console.log(this.reactiveForm.value)
    if (this.reactiveForm.valid){
      this.customerSubmit.emit(this.reactiveForm.value)
    }
  }

}
