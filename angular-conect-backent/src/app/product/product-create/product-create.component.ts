import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductTypeService} from "../../service/product-type.service";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductType} from "../../model/product-type";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product[] = [];
  productType: ProductType[] = [];
  productForm: any;

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeService,
              private router: Router) {
    this.productForm = new FormGroup ({
        id: new FormControl(),
        name: new FormControl(),
        stock: new FormControl(),
        brands: new FormControl(),
        price: new FormControl(),
        color: new FormControl(),
        productType: new FormControl(),

    })
  }

  ngOnInit(): void {
    this.productTypeService.getAllProductType().subscribe(data=>{
      console.log()
      this.productType = data;
    })
  }

  submit(){
    const product = this.productForm.value;
    console.log(product)
    this.productService.saveProduct(product).subscribe(()=>{
      this.productForm.reset();
      this.router.navigate([""])
    })
  }


}
