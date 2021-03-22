import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SftpConfigurationsComponent } from './sftp-configurations/sftp-configurations.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { DistributionConfigurationsComponent } from './distribution-configurations/distribution-configurations.component';
import { AdminApplicationConfigurationsComponent } from './admin-application-configurations/admin-application-configurations.component';
import { UserConfigurationsComponent } from './user-configurations/user-configurations.component';

const routes: Routes = [  
  { path: 'sftp', component: SftpConfigurationsComponent },
  { path: 'configurations', component: TabLayoutComponent },
  { path: 'distribution', component: DistributionConfigurationsComponent },
  { path: 'adminconfig', component:AdminApplicationConfigurationsComponent},
  { path: 'userconfigurations', component: UserConfigurationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
