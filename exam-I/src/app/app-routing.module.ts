import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamListComponent} from "./component/exam-list/exam-list.component";
import {ExamCreateComponent} from "./component/exam-create/exam-create.component";
import {ExamEditComponent} from "./component/exam-edit/exam-edit.component";

const routes: Routes = [
  {path:"", component: ExamListComponent},
  {path:"create", component: ExamCreateComponent},
  {path: "update/:id", component: ExamEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
