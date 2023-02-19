import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Class} from "../model/class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  getAllClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>("http://localhost:3000/class/")
  }

  deleteClass(id: number): Observable<Class> {
    return this.httpClient.delete<Class>("http://localhost:3000/class/"+id)
  }

  saveClass(classRoom: any): Observable<Class> {
    return this.httpClient.post<Class>("http://localhost:3000/class/",classRoom)
  }

  findById(id: number): Observable<Class> {
    return this.httpClient.get<Class>("http://localhost:3000/class/"+id)
  }

  updateClass(id: number, classRoom: Class){
    return this.httpClient.patch<Class>("http://localhost:3000/class/"+id,classRoom)
  }
}
