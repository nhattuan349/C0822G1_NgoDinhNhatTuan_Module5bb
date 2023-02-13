import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../model/rent-type";

  const RENT_TYPE_URL =`${environment.apiUrlRentType}`

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient : HttpClient) { }

  getFacilityType(): Observable<RentType[]>{
    return this.httpClient.get<RentType[]>(RENT_TYPE_URL)
  }

}
