import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../service/facility-type.service";
import {RentTypeService} from "../../service/rent-type.service";
import {Facility} from "../../model/facility";
import {FacilityType} from "../../model/facility-type";
import {RentType} from "../../model/rent-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    facilityType: new FormControl(""),
    rentType: new FormControl("")
  })

  facilityTypeList: FacilityType[] = [];
  facilityList: Facility[] = [];
  rentTypeList: RentType[] = [];
  idDelete: number = 0;
  nameDelete?: string = "";
  p: number = 0

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService : RentTypeService,
              private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAllFacility("","","").subscribe(data =>{
      this.facilityList =data;
      console.log(data)
    })
    this.facilityTypeService.getFacilityType().subscribe(data =>{
      this.facilityTypeList = data;
    })
    this.rentTypeService.getAllRentType().subscribe(data =>{
      this.rentTypeList = data;
    })
  }

  getDataDelete(facility: Facility){
    if (facility.id !=undefined){
      this.idDelete = facility.id;
      this.nameDelete = facility.name;
    }
  }

  deleteFacility(idDelete: number) {
    this.facilityService.deleteFacility(this.idDelete).subscribe(() =>{
      this.ngOnInit()
    })
  }

  onSearch(){
    this.facilityService.getAllFacility(this.searchForm.value.name,
      this.searchForm.value.facilityType,
      this.searchForm.value.rentType,
      ).subscribe(data =>{
      this.facilityList = data;
      console.log(data)
    })
  }

  resest(){
    this.ngOnInit();
  }

}
