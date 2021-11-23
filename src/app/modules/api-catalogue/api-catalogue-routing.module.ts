import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCatalogueHomeComponent } from './api-catalogue-home/api-catalogue-home.component';

const routes: Routes = [  
  { path: 'james', component: ApiCatalogueHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiCatalogueRoutingModule { }
