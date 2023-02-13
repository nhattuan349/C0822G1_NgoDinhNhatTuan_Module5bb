import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityType} from "../../model/facility-type";
import {RentType} from "../../model/rent-type";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../service/facility-type.service";
import {RentTypeService} from "../../service/rent-type.service";
import {ProductType} from "../../../../../angular-conect-backent/src/app/model/product-type";
import {ProductService} from "../../../../../angular-conect-backent/src/app/service/product.service";
import {ProductTypeService} from "../../../../../angular-conect-backent/src/app/service/product-type.service";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityForm : FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    area: new FormControl("", Validators.required),
    cost: new FormControl("", Validators.required),
    maxPeople: new FormControl("", Validators.required),
    standardRoom: new FormControl("", Validators.required),
    descriptionOtherConvenience: new FormControl("", Validators.required),
    poolArea: new FormControl("", Validators.required),
    numberOfFloor: new FormControl("", Validators.required),
    facilityFree: new FormControl("", Validators.required),
    rentTypeId: new FormControl("", Validators.required),
    facilityTypeId: new FormControl("", Validators.required)
  })
  facilityTypeList : FacilityType[] = []
  rentTypeList : RentType[] = []
  facilityList: Facility[] = [];
  id: number = 0;

  constructor(private facilityService : FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'))
      if (this.id !=null) {
        this.getFacility(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.facilityTypeService.getFacilityType().subscribe(data =>{
      this.facilityTypeList = data
      console.log(data)
    })
    this.rentTypeService.getAllRentType().subscribe(data =>{
      this.rentTypeList = data
      console.log(data)
    })
  }

  private getFacility(id: number) {
    console.log(this.facilityService.findById(id))
    return this.facilityService.findById(id).subscribe(facility =>{
      console.log(facility)
      this.facilityForm.patchValue(facility);
    })
  }

  comparaFt(o1: FacilityType, o2: FacilityType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  comparaRt(o1: RentType, o2: RentType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }


  update(id:number){
    if (this.facilityForm != undefined && id != null){
      const facility = this.facilityForm.value;
      console.log(facility)
      this.facilityService.updateFacility(id, facility).subscribe(()=>{
        if (this.facilityForm != undefined){
          this.facilityForm.reset();
          this.router.navigateByUrl("/facility/list");
        }
      }, error => {
        this.router.navigateByUrl("/facility/upadate")
      })
    }
  }

}
