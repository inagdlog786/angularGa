import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorationComponent } from './exploration.component';
import { ExploreGraphComponent } from './explore-graph/explore-graph.component';
import { QueryConfigurationComponent } from './query-configuration/query-configuration.component';

// const routes: Routes = [
//   { path: 'exploration', component: ExplorationComponent }
// ];


const routes: Routes = [  
  { path: 'exploration', component: ExplorationComponent },
  { path: 'explore-graph', component: ExploreGraphComponent },
  { path: 'query-config', component: QueryConfigurationComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorationRoutingModule { }
