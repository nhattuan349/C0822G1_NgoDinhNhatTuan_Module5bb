import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    customerType: new FormControl("")
  })

  customerTypeList: CustomerType[] = [];
  customerList: Customer[] = [];
  idDelete: number = 0;
  nameDelete?: string = "";
  p: number = 0

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer("","").subscribe(data =>{
      this.customerList =data;
      console.log(data)
    })
    this.customerTypeService.getAllCustomeType().subscribe(data =>{
      this.customerTypeList = data;
    })
  }

  getDataDelete(customer: CustomerType){
    if (customer.id !=undefined){
      this.idDelete = customer.id;
      this.nameDelete = customer.name;
    }
  }

  deleteCustomer(idDelete: number) {
    this.customerService.deleteCustomer(this.idDelete).subscribe(() =>{
      this.ngOnInit()
    })
  }

  onSearch(){
    this.customerService.getAllCustomer(this.searchForm.value.name,this.searchForm.value.customerType).subscribe(data =>{
      this.customerList = data;
      console.log(data)
    })
  }

  resest(){
    this.ngOnInit();
  }

}
