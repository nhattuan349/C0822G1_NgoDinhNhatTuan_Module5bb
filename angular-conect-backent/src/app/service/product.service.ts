import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(search_name: any, search_product_type:string): Observable<Product[]> {
    let url = "http://localhost:3000/product"
    if (search_name != null){
      url += '?name_like='+ search_name+'&productType.name_like='+ search_product_type
    }
    console.log(url)
    return this.httpClient.get<Product[]>(url)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>("http://localhost:3000/product/"+id)
  }

  saveProduct(product: any): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:3000/product/",product)
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:3000/product/"+id)
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>("http://localhost:3000/product/"+id,product)
  }

}
