import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractModule} from "./contract/contract.module";

const routes: Routes = [
  {path:'customer',loadChildren:() => import('./customer/customer.module').then(module => module.CustomerModule)},
  {path:'facility',loadChildren:() => import('./facility/facility.module').then(module => module.FacilityModule)},
  {path: 'contract',loadChildren:() => import('./contract/contract.module').then(module => module.ContractModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
