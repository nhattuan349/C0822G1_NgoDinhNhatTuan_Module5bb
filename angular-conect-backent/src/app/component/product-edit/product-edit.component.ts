import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductType} from "../../model/product-type";
import {ProductService} from "../../service/product.service";
import {ProductTypeService} from "../../service/product-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm : FormGroup = new FormGroup({
    name: new FormControl(),
    stock: new FormControl(),
    brands: new FormControl(),
    price: new FormControl(),
    color: new FormControl(),
  })

  productList: ProductType[] = [];
  id: number = 0;

  constructor(private productService : ProductService,
              private productTypeService: ProductTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'))
      if (this.id !=null) {
        this.getProduct(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.productTypeService.getAllProductType().subscribe(data =>{
    this.productList = data
      console.log(data)
    })
  }

  private getProduct(id: number) {
    console.log(this.productService.findById(id))
    return this.productService.findById(id).subscribe(product =>{
      console.log(product)
      this.productForm.patchValue(product);
    })
  }

  comparaFn(o1: ProductType, o2: ProductType): boolean{
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update(id:number){
    if (this.productForm != undefined && id != null){
      const product = this.productForm.value;
      console.log(product)
      this.productService.updateProduct(id, product).subscribe(()=>{
        if (this.productForm != undefined){
          this.productForm.reset();
          this.router.navigateByUrl("");
        }
      }, error => {
        this.router.navigateByUrl("")
      })
    }
  }
}
