import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

const CUSTOMER_URL = `${environment.apiUrlCustomer}`

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }


  getAllCustomer(search_name: any = null, search_customer_type:string): Observable<Customer[]>{
    let url = CUSTOMER_URL;
    debugger
    if (search_name != null){
      url +='?name_like='+ search_name+'&customerType.name_like='+search_customer_type;
    }
    console.log(url)
    debugger
    return this.httpClient.get<Customer[]>(url);
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.httpClient.delete<Customer>(`${CUSTOMER_URL}/${id}`)
  }

  saveCustomer(customer : any): Observable<Customer>{
    return this.httpClient.post<Customer>(CUSTOMER_URL,customer)
  }

  findById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${CUSTOMER_URL}/${id}`)
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer>{
    return this.httpClient.patch<Customer>(`${CUSTOMER_URL}/${id}`,customer)
  }


  getAllCustomerContract(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(CUSTOMER_URL)
  }
}
