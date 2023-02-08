import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    dateOfBirth: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    idCard: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    customerType: new FormControl("", Validators.required)
  })

  customerTypeList: CustomerType[] = [];
  id: number = 0;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'))
      if (this.id != null) {
        this.getCustomer(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypeList = data
      console.log(data)
    })
  }


  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      console.log(customer)
      this.customerForm.patchValue(customer)
    })
  }

  comparaFn(o1: CustomerType, o2: CustomerType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update(id: number) {
    if (this.customerForm != undefined && id != null) {
      const customer = this.customerForm.value;
      console.log(customer)
      this.customerService.updateCustomer(id, customer).subscribe(data=>{
        if (this.customerForm != undefined){
          this.customerForm.reset();
          this.router.navigateByUrl('customer/list')
        }
      },error => {
        this.router.navigateByUrl('customer/update')
      })
    }
  }
}
