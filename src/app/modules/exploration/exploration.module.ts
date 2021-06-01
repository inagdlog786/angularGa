import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  FormsModule } from '@angular/forms'; 

import { ExplorationRoutingModule } from './exploration-routing.module';
import { ExplorationComponent } from './exploration.component';
import { ExploreGraphComponent } from './explore-graph/explore-graph.component';
import { QueryConfigurationComponent } from './query-configuration/query-configuration.component';

import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [ExplorationComponent, ExploreGraphComponent, QueryConfigurationComponent],
  imports: [
    CommonModule,     
    TabsModule.forRoot(),  
    ExplorationRoutingModule,
    FormsModule
  ]
})
export class ExplorationModule { }
