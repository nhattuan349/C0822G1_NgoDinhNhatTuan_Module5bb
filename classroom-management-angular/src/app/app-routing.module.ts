import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassListComponent} from "./component/class-list/class-list.component";
import {ClassCreateComponent} from "./component/class-create/class-create.component";
import {ClassEditComponent} from "./component/class-edit/class-edit.component";

const routes: Routes = [
  {path: "", component:ClassListComponent},
  {path:"create", component: ClassCreateComponent},
  {path:"update/:id", component: ClassEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
