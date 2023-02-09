import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product | null = {}
  productList: Product[] = [
    {id: 1, name: 'máy quạt', stock: 'trong kho còn 23', price: '229', brands: 'asia', color: 'green'},
    {id: 2, name: 'Thước', stock: 'trong kho còn 12', price: '1', brands: 'Kim Nguyen', color: 'white'},
    {id: 3, name: 'đồng hồ', stock: 'trong kho còn 5', price: '1000', brands: 'rolex', color: 'gray'},
    {id: 4, name: 'box', stock: 'trong kho còn 123', price: '2', brands: 'HONG HA', color: 'yelow'},
  ]

  constructor() {
  }

  getAll() {
    return this.productList;
  }

  saveProduct(product: Product){
    return this.productList.push(product)
  }

  findById(id: number) {
    let result = this.productList.filter(element => element.id === id);
    if (result.length == 0) {
      return null;
    }
    return  result[0];
  }

  updateProduct(product: any){
    let lenght = this.productList.length;
    for (let i = 0; i< length; i++){
      if (product.id == this.productList[i].id){
        this.productList[i] = product;
        break;
      }
    }
  }

  deleteById(id: number) {
      this.product = this.findById(id);
      let length = this.productList.length;
      for (let i = 0; i< length; i++){
        if (this.productList[i].id==this.product?.id){
          this.productList.splice(i,1);
          break;
        }
      }
  }
}
