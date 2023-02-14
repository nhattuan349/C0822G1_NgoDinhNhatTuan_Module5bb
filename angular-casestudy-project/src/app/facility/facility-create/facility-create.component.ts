import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customerType";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
        id: new FormControl("",Validators.required),
        name: new FormControl("",Validators.required),
        area : new FormControl("",Validators.required),
        cost: new FormControl("",Validators.required),
        maxPeople: new FormControl("",Validators.required),
        standardRoom: new FormControl("",Validators.required),
        descriptionOtherConvenience : new FormControl("",Validators.required),
        poolArea : new FormControl("",Validators.required),
        numberOfFloor : new FormControl("",Validators.required),
        facilityFree : new FormControl("",Validators.required),
        rentTypeId : new FormControl("",Validators.required),
        facilityTypeId : new FormControl("",Validators.required)
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
