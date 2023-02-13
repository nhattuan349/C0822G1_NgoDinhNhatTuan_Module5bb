import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

const routes: Routes = [
  {
    path: "product", component: ProductComponent, children: [
      {path: "", component: ProductListComponent},
      {path: "create", component: ProductCreateComponent},
      {path: "update/:id", component: ProductEditComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
