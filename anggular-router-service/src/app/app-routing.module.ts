import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./excercise/product-list/product-list.component";
import {ProductCreateComponent} from "./excercise/product-create/product-create.component";
import {ProductEditComponent} from "./excercise/product-edit/product-edit.component";

const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "create", component: ProductCreateComponent},
  {path: "update/:id", component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
