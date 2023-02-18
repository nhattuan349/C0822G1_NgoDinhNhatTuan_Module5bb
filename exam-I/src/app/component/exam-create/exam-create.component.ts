import { Component, OnInit } from '@angular/core';
import {Hospital} from "../../model/hospital";
import {People} from "../../model/people";
import {HospitalService} from "../../service/hospital.service";
import {PeopleService} from "../../service/people.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam-create',
  templateUrl: './exam-create.component.html',
  styleUrls: ['./exam-create.component.css']
})
export class ExamCreateComponent implements OnInit {

  hospitalList: Hospital[] = [];
  peopleList: People[] = [];
  hospitalForm: any;

  constructor(private hospitalService: HospitalService,
              private peopleService: PeopleService,
              private router: Router) {
    this.hospitalForm = new FormGroup ({
      id: new FormControl(),
      idHospital: new FormControl(),
      dateImport: new FormControl(),
      dateExport: new FormControl(),
      reason: new FormControl(),
      method: new FormControl(),
      doctor: new FormControl(),
      people: new FormControl()
    })
  }

  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe(data=>{
      console.log()
      this.peopleList = data;
    })
  }

  submit(){
    const hospital = this.hospitalForm.value;
    console.log(hospital)
    this.hospitalService.saveHospital(hospital).subscribe(()=>{
      this.hospitalForm.reset();
      this.router.navigateByUrl("");
    })
  }

}
