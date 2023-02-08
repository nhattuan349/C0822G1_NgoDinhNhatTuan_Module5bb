import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerType: CustomerType [] = [];
  customerForm: any;

  constructor(private customerService : CustomerService,
              private customerTypeService : CustomerTypeService,
              private router: Router) {
    this.customerForm = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth : new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email : new FormControl(),
      address : new FormControl(),
      customerType : new FormControl()
    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(data=>{
      this.customerType =data
      console.log(data)
    })
  }

  submit(){
    const customer = this.customerForm.value;
    console.log(customer)
    this.customerService.saveCustomer(customer).subscribe(()=>{
      this.customerForm.reset();
      this.router.navigate(['customer/list'])
    })
  }
}
