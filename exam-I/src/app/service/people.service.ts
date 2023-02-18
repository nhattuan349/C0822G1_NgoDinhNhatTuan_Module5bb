import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {People} from "../model/people";

const PEOPLE_URL = "http://localhost:8080/api/people/v1"

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  constructor(private httpClient: HttpClient) {
  }

  getAllPeople(): Observable<any> {
    return this.httpClient.get<any>(PEOPLE_URL)
  }
}
