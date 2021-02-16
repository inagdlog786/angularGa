import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SftpConfigurationsComponent } from './sftp-configurations/sftp-configurations.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';

const routes: Routes = [  
  { path: 'sftp', component: SftpConfigurationsComponent },
  { path: 'configurations', component: TabLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
