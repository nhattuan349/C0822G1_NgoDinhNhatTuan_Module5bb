import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

const CONTRACT_URL = `${environment.apiUrlContract}`


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) {
  }

  getAllContract(start_date: any = null, end_date: any = null, customer: string, facility: string): Observable<Contract[]> {
    let url = CONTRACT_URL
    if (start_date != null && end_date != null) {
      url += '?startDate_like=' + start_date + '&endDate_like=' + end_date +
        '&customerId.name_like=' + customer + '&facilityId.name_like=' + facility
    }
    return this.httpClient.get<Contract[]>(url)
  }

  deleteContract(id: number) {
    return this.httpClient.delete<Contract>(`${CONTRACT_URL}/${id}`)
  }

  saveContract(contract: any){
    return this.httpClient.post<Contract>(CONTRACT_URL, contract)
  }

}
