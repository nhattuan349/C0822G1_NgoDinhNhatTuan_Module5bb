import { Component, OnInit } from '@angular/core';
import {Hospital} from "../../model/hospital";
import {People} from "../../model/people";
import {HospitalService} from "../../service/hospital.service";
import {Router} from "@angular/router";
import {PeopleService} from "../../service/people.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {


  searchForm: FormGroup = new FormGroup({
    dateImport: new FormControl(""),
    dateExport: new FormControl(""),
  })

  peopleList: People[] = [];
  hospitalList: Hospital[] = [];
  idDelete: number = 0;
  nameDelete?: string = "";
  p: number = 0;
  pageSize : number = 0;
  indexPagination =0;
  dateImportSearch : string = "";
  dateExportSearch: string = "";
  number: number = 0;
  totalPage: string[] = [];
  numberOfElement = 0;
  totalElements = 0;
  previousPageStyle = 'inline-block';
  nextPageStyle = 'inline-block';
  displayPagination = 'inline-block';
  totalQuantity = 0;



  constructor(private hospitalService: HospitalService,
              private peopleService: PeopleService,
              private router : Router) { }

  ngOnInit(): void {
    this.searchHospital();
    this.getListSearch();
  }


  getListSearch() {
    this.hospitalService.getAllHospital(this.indexPagination, this.dateImportSearch, this.dateExportSearch,
      this.pageSize).subscribe((data?: any) => {

      this.number = data?.number;
      console.log(this.number);
      this.pageSize = data?.size;
      this.numberOfElement = data?.numberOfElements;
      this.hospitalList = data?.content;
      console.log(this.hospitalList);
      this.totalPage = new Array(+data.totalPages);
      this.totalElements = data?.totalElements;
      this.checkPreviousAndNext();
    });

  }

  searchHospital() {
    this.dateImportSearch = this.searchForm.value.dateImport;
    this.dateExportSearch = this.searchForm.value.dateImport;
    this.getListSearch();
  }


  previousPage(event: any) {
    event.preventDefault();
    this.indexPagination--;
    this.ngOnInit();
  }

  nextPage(event: any) {
    event.preventDefault();
    this.indexPagination++;
    this.ngOnInit();
  }

  checkPreviousAndNext() {
    if (this.indexPagination === 0) {
      this.previousPageStyle = 'none';
    } else if (this.indexPagination !== 0) {
      this.previousPageStyle = 'inline-block';
    }
    if (this.indexPagination < (this.totalPage.length - 1)) {
      this.nextPageStyle = 'inline-block';
    } else if (this.indexPagination === (this.totalPage.length - 1) || this.indexPagination > (this.totalPage.length - 1)) {
      this.nextPageStyle = 'none';
    }
  }

  totalElement($event: any) {
    switch ($event.target.value) {
      case '6':
        this.pageSize = 6;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case '12':
        this.pageSize = 12;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case '18':
        this.pageSize = 18;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case 'full':
        this.pageSize = this.totalElements;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
    }
  }

  getDataDelete(hospital: Hospital){
    if (hospital.id !=undefined){
      this.idDelete = hospital.id;
      this.nameDelete = hospital.idHospital;
    }
  }

  deleteHospital(idDelete: number) {
    this.hospitalService.deleteHospital(this.idDelete).subscribe(() =>{
      this.ngOnInit()
    })
  }

  reset(){
    this.ngOnInit();
  }

  // hospitalList: Hospital[] = [];
  // peopleList: People[] = [];
  // idDelete: number = 0;
  // nameDelete?: string = "";
  // p: number = 0
  //
  // constructor(private hospitalService: HospitalService,
  //             private peopleService: PeopleService,
  //             private router : Router) { }
  //
  // ngOnInit(): void {
  //   this.getAll();
  // }
  //
  // getAll() {
  //   this.hospitalService.getAllHospital().subscribe(data =>{
  //     this.hospitalList =data;
  //     console.log(data)
  //   })
  //   this.peopleService.getAllPeople().subscribe(data =>{
  //     this.peopleList = data;
  //   })
  // }
  //
  // getDataDelete(hospital: Hospital){
  //   if (hospital.id !=undefined){
  //     this.idDelete = hospital.id;
  //     this.nameDelete = hospital.idHospital;
  //   }
  // }
  //
  // deleteHospital(idDelete: number) {
  //   this.hospitalService.deleteHospital(this.idDelete).subscribe(() =>{
  //     this.ngOnInit()
  //   })
  // }




}
