import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ProductTypeService} from "../../service/product-type.service";
import {Router} from "@angular/router";
import {ProductType} from "../../model/product-type";
import {CustomerType} from "../../../../../angular-casestudy-project/src/app/model/customerType";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    productType: new FormControl("")
  })

  productList: Product[] = []
  productTypeList: ProductType[] = []
  product: Product = {};
  idDelete: number = 0;
  nameDelete?: string = "";
  p: number=0;

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeService) {

  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.productService.getAllProduct("","").subscribe(data=>{
      console.log(data)
      this.productList =data
    },error => {

    },() =>{

    })
    this.productTypeService.getAllProductType().subscribe(data=>{
      console.log(data)
      this.productTypeList = data
    },error => {

    },() => {
    })
  }

  getDataDelete(product: ProductType){
    if (product.id !=undefined){
      this.idDelete = product.id;
      this.nameDelete = product.name;
    }
  }

  deleteProduct(idDelete: number) {
    this.productService.deleteProduct(this.idDelete).subscribe(() =>{
      this.ngOnInit()
    })
  }

  onSearch(){
    this.productService.getAllProduct(this.searchForm.value.color,this.searchForm.value.productType).subscribe(data=>{
      this.productList =data
      console.log(data)
    })

  }

  resest(){
    this.ngOnInit()
  }

}
