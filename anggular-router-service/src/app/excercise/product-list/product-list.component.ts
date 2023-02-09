import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product : Product= {id :1};
  productList : Product [] = [];

  constructor(private productService: ProductService,
              private router : Router) {
    this.productList = productService.getAll();
  }

  ngOnInit(): void {
  }

  changePageToCreate(){
    this.router.navigateByUrl("/create")
  }

  changePageToInfo(id: number){
    this.router.navigate(["/info",id])
  }

  deleteProduct(id: any){
    this.productService.deleteById(parseInt(id));
    this.router.navigateByUrl("/product")
    alert("Xóa product thành công")
  }


}
