import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../../../angular-conect-backent/src/app/model/product-type";
import {ProductService} from "../../../../../angular-conect-backent/src/app/service/product.service";
import {ProductTypeService} from "../../../../../angular-conect-backent/src/app/service/product-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../model/class";
import {Teacher} from "../../model/teacher";
import {ClassService} from "../../service/class.service";
import {TeacherService} from "../../service/teacher.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  classForm : FormGroup = new FormGroup({
    nameBlock: new FormControl("",Validators.required),
    nameClass: new FormControl("",Validators.required),
    numberOfMembers: new FormControl("",Validators.required),
    homeroomTeacher: new FormControl("",Validators.required),

  })
  classList: Class[] = []
  teacherList: Teacher[] = []
  id: number = 0;

  constructor(private classService: ClassService,
              private teacherService: TeacherService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'))
      if (this.id !=null) {
        this.getClass(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.teacherService.getAllTeacher().subscribe(data =>{
      this.teacherList = data
      console.log(data)
    })
  }

  private getClass(id: number) {
    console.log(this.classService.findById(id))
    return this.classService.findById(id).subscribe(product =>{
      console.log(product)
      this.classForm.patchValue(product);
    })
  }

  comparaFn(o1: Teacher, o2: Teacher): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update(id:number){
    if (this.classForm != undefined && id != null){
      const classRoom = this.classForm.value;
      console.log(classRoom)
      this.classService.updateClass(id, classRoom).subscribe(()=>{
        if (this.classForm != undefined){
          this.classForm.reset();
          this.router.navigateByUrl("");
        }
      }, error => {
        this.router.navigateByUrl("")
      })
    }
  }
}
