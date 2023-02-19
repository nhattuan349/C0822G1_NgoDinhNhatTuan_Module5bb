import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../../angular-conect-backent/src/app/model/product";
import {ProductType} from "../../../../../angular-conect-backent/src/app/model/product-type";
import {ProductService} from "../../../../../angular-conect-backent/src/app/service/product.service";
import {ProductTypeService} from "../../../../../angular-conect-backent/src/app/service/product-type.service";
import {ClassService} from "../../service/class.service";
import {TeacherService} from "../../service/teacher.service";
import {Class} from "../../model/class";
import {Teacher} from "../../model/teacher";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classList: Class[] = []
  teacherList: Teacher[] = []
  class: Class = {};
  idDelete: number = 0;
  nameDelete?: string = "";
  p: number=0;

  constructor(private classService: ClassService,
              private teacherService: TeacherService) {

  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.classService.getAllClass().subscribe(data=>{
      console.log(data)
      this.classList =data
    },error => {

    },() =>{

    })
    this.teacherService.getAllTeacher().subscribe(data=>{
      console.log(data)
      this.teacherList = data
    },error => {

    },() => {
    })
  }

  getDataDelete(classRoom: Class){
    if (classRoom.id !=undefined){
      this.idDelete = classRoom.id;
      this.nameDelete = classRoom.nameClass;
    }
  }

  deletClass(idDelete: number) {
    this.classService.deleteClass(this.idDelete).subscribe(() =>{
      this.ngOnInit()
    })
  }




}
