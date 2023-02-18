import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hospital} from "../model/hospital";


  const HOSPITAL_URL = 'http://localhost:3000/api/hospital/v1'
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient : HttpClient) { }

  getAllHospital(page:number , dateImportSearch: string, dateExportSearch: string, size : number): Observable<Hospital[]> {

    return this.httpClient.get<Hospital[]>(HOSPITAL_URL + `?page=` +page + `&dateImport` + dateImportSearch + `&dateExport`+ dateExportSearch  +`&size` + size);
  }

  // getAllHospital(): Observable<Hospital[]>{
  //   return this.httpClient.get<Hospital[]>(HOSPITAL_URL)
  // }

  deleteHospital(id: number){
    return this.httpClient.delete<Hospital>(`${HOSPITAL_URL}/${id}`)
  }


  saveHospital(hospital : any): Observable<Hospital>{
    return this.httpClient.post<Hospital>(`${HOSPITAL_URL}/create`, hospital)
  }

  findById(id: number): Observable<Hospital>{
    return this.httpClient.get<Hospital>(`${HOSPITAL_URL}/${id}`)
  }

  updateHospital(id: number, hospital: Hospital): Observable<Hospital>{
    return this.httpClient.patch<Hospital>(`${HOSPITAL_URL}/update/${id}`, hospital)
  }



}
