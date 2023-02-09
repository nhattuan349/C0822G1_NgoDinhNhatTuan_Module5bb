import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  dictionaryDetail: null | Dictionary = {id:'', name:''};


  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data =>{
      let id =data.get('id');
      if (id != null) {
        this.dictionaryDetail = this.dictionaryService.findById(id);
      }
    },error => {

    },()=>{

    });
  }

  ngOnInit(): void {
  }

}
