import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../model/product-type";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private httpClient: HttpClient) { }

  getAllProductType(): Observable<ProductType[]>{
    return this.httpClient.get<ProductType[]>("http://localhost:3000/productType")
  }



}
