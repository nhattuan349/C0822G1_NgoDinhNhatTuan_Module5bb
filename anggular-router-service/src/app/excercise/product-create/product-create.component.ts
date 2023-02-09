import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup;
  productList:Product[]=this.productService.getAll();

  constructor(private productService: ProductService,
              private router: Router) {
    this.productForm = new FormGroup({
      id: new FormControl("",Validators.required),
      name: new FormControl("",Validators.required),
      stock: new FormControl("",Validators.required),
      brands: new FormControl("",Validators.required),
      price: new FormControl("",Validators.required),
      color: new FormControl("",Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.product = this.productForm.value;
    this.product.id =  this.productList.length+1;
    this.productService.saveProduct(this.product);
    this.router.navigateByUrl("");
    alert("Thêm thành công");
    console.log(this.product)
  }
}
