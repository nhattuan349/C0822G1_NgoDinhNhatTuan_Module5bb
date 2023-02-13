import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../service/facility-type.service";
import {RentTypeService} from "../../service/rent-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityType: CustomerType [] = [];
  rentType: CustomerType [] = [];
  facilityForm: any;

  constructor(private facilityService : FacilityService,
              private facilityTypeService : FacilityTypeService,
              private rentTypeService : RentTypeService,
              private router: Router) {
    this.facilityForm = new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl(),
        area : new FormControl(),
        cost: new FormControl(),
        maxPeople: new FormControl(),
        standardRoom: new FormControl(),
        descriptionOtherConvenience : new FormControl(),
        poolArea : new FormControl(),
        numberOfFloor : new FormControl(),
        facilityFree : new FormControl(),
        rentTypeId : new FormControl(),
        facilityTypeId : new FormControl()
      })
  }

  ngOnInit(): void {
    this.facilityTypeService.getFacilityType().subscribe(data=>{
      this.facilityType =data
      console.log(data)
    })
    this.rentTypeService.getAllRentType().subscribe(data=>{
      this.rentType =data
      console.log(data)
    })
  }

  submit(){
    const facility = this.facilityForm.value;
    console.log(facility)
    this.facilityService.saveFacility(facility).subscribe(()=>{
      this.facilityForm.reset();
      this.router.navigateByUrl('/facility/list')
    })
  }
}
