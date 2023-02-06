import { Component, OnInit } from '@angular/core';
import {Home} from "../../model/home";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeList: Home[] = [
    {id: 1, name: "TuanNT", dateOfBirth:"1995/08/28", point: 3},
    {id: 2, name: "DuongH", dateOfBirth:"1995/08/29", point: 9},
    {id: 3, name: "BaoHX", dateOfBirth:"1995/08/30", point: 4},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
