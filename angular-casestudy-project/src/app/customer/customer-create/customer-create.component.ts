import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
      id: new FormControl("",Validators.required),
      name: new FormControl("",Validators.required),
      dateOfBirth : new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      idCard: new FormControl("",Validators.required),
      phoneNumber: new FormControl("",Validators.required),
      email : new FormControl("",Validators.required),
      address : new FormControl("",Validators.required),
      customerType : new FormControl("",Validators.required)
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
      this.router.navigate(['/customer/list'])
    })
  }

}
