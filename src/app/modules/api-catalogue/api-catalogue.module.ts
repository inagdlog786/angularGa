import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiCatalogueRoutingModule } from './api-catalogue-routing.module';
import { ApiCatalogueHomeComponent } from './api-catalogue-home/api-catalogue-home.component';


@NgModule({
  declarations: [ApiCatalogueHomeComponent],
  imports: [
    CommonModule,
    ApiCatalogueRoutingModule
  ]
})
export class ApiCatalogueModule { }
