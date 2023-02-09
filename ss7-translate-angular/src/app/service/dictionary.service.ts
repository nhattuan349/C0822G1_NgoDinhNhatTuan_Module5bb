import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaties: Dictionary[];

  constructor() {
    this.dictionaties = [
      {id: "greeen", name: "xanh lá"},
      {id: "yellow", name: "vàng"},
      {id: "red", name: "Đỏ"},
      {id: "blue", name: "xanh"},
      {id: "black", name: "Đen"},
    ]
  }

  findById(id: string):null|Dictionary {
    let dictionary = this.dictionaties.filter(element => element.id === id)
    if (dictionary.length === 0) {
      return null;
    }else {
      return dictionary[0]
    }
  }
}
