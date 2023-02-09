import { Injectable } from '@angular/core';
import {Vocabulary} from "../model/vocabulary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  vocabularys: Vocabulary[] = [
    {id: 1, word: "greeen", mean: "xanh lá"},
    {id: 2, word: "yellow", mean: "vàng"},
    {id: 3, word: "red", mean: "Đỏ"},
    {id: 4, word: "blue", mean: "xanh"},
    {id: 5, word: "black", mean: "Đen"},
  ]


  constructor() { }
}
