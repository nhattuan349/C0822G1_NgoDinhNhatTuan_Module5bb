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
    email: 'nhattuanc08@codegym.vn',
    password: '123',
    confirmPassword: '123',
    country: 'Quảng Nam',
    age: '17',
    gender: 'Nam',
    phone: '0905999555'
  }
  @Output() customerSubmit = new EventEmitter();

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b")]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
      country: new FormControl("", Validators.required),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", Validators.required),
      phone: new FormControl("", [Validators.required,Validators.pattern("(84|0[3|5|7|8|9])+([0-9]{8})\\b")]),
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
