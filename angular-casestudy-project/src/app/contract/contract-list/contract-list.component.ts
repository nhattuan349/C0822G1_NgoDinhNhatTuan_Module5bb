import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {ContractService} from "../../service/contract.service";
import {CustomerService} from "../../service/customer.service";
import {FacilityService} from "../../service/facility.service";
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    startDate: new FormControl(""),
    endDate: new FormControl(""),
    customer: new FormControl(""),
    facility: new FormControl("")
  })

  contractList: Contract[] = []
  customerList: Customer[] = []
  facilityList: Facility[] = []
  idDelete: number = 0;
  nameDelete?: string;
  p:number = 0;

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll() {
    this.contractService.getAllContract("", "", "", "").subscribe(data => {
      this.contractList = data
      console.log(data)
    })
    this.customerService.getAllCustomerContract().subscribe(data => {
      console.log(data)
      debugger
      this.customerList = data
    })
    this.facilityService.getAllFacility("", "", "").subscribe(data => {
      this.facilityList = data
      console.log(data)
    })
  }

  getDataDelete(contract: Contract) {
    if (contract.id != undefined) {
      this.idDelete = contract.id
      this.nameDelete = contract.customerId.name
    }
  }

  deleteContract(idDelete: number){
    this.contractService.deleteContract(this.idDelete).subscribe(()=>{
      this.ngOnInit()
    })
  }

  onSearch(){
    this.contractService.getAllContract(this.searchForm.value.startDate,this.searchForm.value.endDate,
      this.searchForm.value.customer, this.searchForm.value.facility).subscribe(contract =>{
        this.contractList = contract
      console.log(contract)
    })
  }

  reset(){
    this.ngOnInit()
  }

}
