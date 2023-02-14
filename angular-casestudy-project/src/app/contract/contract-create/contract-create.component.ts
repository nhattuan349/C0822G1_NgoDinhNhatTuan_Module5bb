import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {ContractService} from "../../service/contract.service";
import {CustomerService} from "../../service/customer.service";
import {FacilityService} from "../../service/facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractList : Contract[] = [];
  customerList : Customer[] = [];
  facilityList : Facility[] = []
  contractForm: any

  constructor(private contractService : ContractService,
              private customerService : CustomerService,
              private facilityService : FacilityService,
              private router : Router) {
    this.contractForm = new FormGroup({
      id : new FormControl("",Validators.required),
      startDate : new FormControl("",Validators.required),
      endDate : new FormControl("",Validators.required),
      deposit : new FormControl("",Validators.required),
      customerId : new FormControl("",Validators.required),
      facilityId : new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
    this.facilityService.getAllFacility("","","").subscribe(data =>{
      this.facilityList =data
      console.log(data)
    })
    this.customerService.getAllCustomerContract().subscribe(data =>{
      this.customerList =data
      console.log(data)
    })
  }

  submit(){
    const contract = this.contractForm.value
    console.log(contract)
    this.contractService.saveContract(contract).subscribe(contract=>{
      this.contractForm.reset()
      this.router.navigateByUrl('/contract/list')
    })
  }

}
