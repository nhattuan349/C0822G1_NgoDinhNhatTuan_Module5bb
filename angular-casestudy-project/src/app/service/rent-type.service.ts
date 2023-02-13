import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacilityType} from "../model/facility-type";

  const FACILITY_TYPE_URL =`${environment.apiUrlFacilityType}`

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) { }

  getAllRentType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(FACILITY_TYPE_URL)
  }



}
