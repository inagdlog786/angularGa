import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SftpConfigurationsComponent } from './sftp-configurations/sftp-configurations.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';


import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DistributionConfigurationsComponent } from './distribution-configurations/distribution-configurations.component';

@NgModule({
  declarations: [SftpConfigurationsComponent, TabLayoutComponent, DistributionConfigurationsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
    ConfigurationRoutingModule,    
    TabsModule.forRoot(),    
  ]
})
export class ConfigurationModule { }
