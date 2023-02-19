import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../model/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  getAllTeacher(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>("http://localhost:3000/teacher")
  }
}
