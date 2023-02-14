import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";


    const FACILITY_URL =`${environment.apiUrlFacility}`

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) { }

  getAllFacility(search_name: any = null, search_rent_type: string, search_facility_type: string): Observable<Facility[]>{
    let url = FACILITY_URL;
    if (search_name != null) {
      url +='?name_like='+ search_name +'&rentTypeId.name_like='+search_rent_type+'&facilityTypeId.name_like='+search_facility_type;
    }
    console.log(url)
    return this.httpClient.get<Facility[]>(FACILITY_URL);
  }

  deleteFacility(id: number){
    return this.httpClient.delete<Facility>(`${FACILITY_URL}/${id}`)
  }


  saveFacility(facility : any): Observable<Facility>{
    return this.httpClient.post<Facility>(FACILITY_URL,facility)
  }

  findById(id: number): Observable<Facility>{
    return this.httpClient.get<Facility>(`${FACILITY_URL}/${id}`)
  }

  updateFacility(id: number, facility: Facility): Observable<Facility>{
    return this.httpClient.patch<Facility>(`${FACILITY_URL}/${id}`,facility)
  }

}
