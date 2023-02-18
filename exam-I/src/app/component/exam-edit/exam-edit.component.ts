import {Component, OnInit} from '@angular/core';
import {Hospital} from "../../model/hospital";
import {People} from "../../model/people";
import {HospitalService} from "../../service/hospital.service";
import {PeopleService} from "../../service/people.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.css']
})
export class ExamEditComponent implements OnInit {

  hospitalForm : FormGroup = new FormGroup({
    id: new FormControl(),
    idHospital: new FormControl(""),
    dateImport: new FormControl(""),
    dateExport: new FormControl(""),
    reason: new FormControl(""),
    method: new FormControl(""),
    doctor: new FormControl(""),
    people: new FormControl("")
  })
  hospitalList : Hospital[] = []
  peopleList: People[] = [];
  id: number = 0;

  constructor(private hospitalService : HospitalService,
              private peopleService: PeopleService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'))
      if (this.id !=null) {
        this.getHospital(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe(data =>{
      this.peopleList = data
      console.log(data)
    })
  }

  private getHospital(id: number) {
    console.log(this.hospitalService.findById(id))
    return this.hospitalService.findById(id).subscribe(hospital =>{
      console.log(hospital)
      this.hospitalForm.patchValue(hospital);
    })
  }

  comparaFn(o1: People, o2: People): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update(id:number){
    if (this.hospitalForm != undefined && id != null){
      const hospital = this.hospitalForm.value;
      console.log(hospital)
      this.hospitalService.updateHospital(id, hospital).subscribe(()=>{
        if (this.hospitalForm != undefined){
          this.hospitalForm.reset();
          this.router.navigateByUrl("");
        }
      }, error => {
        this.router.navigateByUrl("")
      })
    }
  }

}
