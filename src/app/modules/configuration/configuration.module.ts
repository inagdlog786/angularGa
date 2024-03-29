import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SftpConfigurationsComponent } from './sftp-configurations/sftp-configurations.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';


import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DistributionConfigurationsComponent } from './distribution-configurations/distribution-configurations.component';
import { AdminApplicationConfigurationsComponent } from './admin-application-configurations/admin-application-configurations.component';
import { UserConfigurationsComponent } from './user-configurations/user-configurations.component';

import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FormsModule, FormBuilder } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { SelectDropDownModule } from 'ngx-select-dropdown'


import { NgSelectModule } from '@ng-select/ng-select';


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from "ngx-spinner";
import { ContentMappingComponent } from './content-mapping/content-mapping.component';
import { CreateNewplanComponent } from './create-newplan/create-newplan.component';
import { IngestionConfigurationComponent } from './ingestion-configuration/ingestion-configuration.component';
import { TestModalsComponent } from './test-modals/test-modals.component';



@NgModule({
  declarations: [SftpConfigurationsComponent, TabLayoutComponent, DistributionConfigurationsComponent,
    AdminApplicationConfigurationsComponent,
    UserConfigurationsComponent,
    ContentMappingComponent,
    CreateNewplanComponent,
    IngestionConfigurationComponent,
    TestModalsComponent],
    imports: [
      CommonModule,
      HttpClientModule,
      AngularSvgIconModule.forRoot() ,
      ConfigurationRoutingModule,    
      TabsModule.forRoot(),  
      TimepickerModule.forRoot(),
      
      BsDatepickerModule.forRoot(),
      
      NgxBootstrapMultiselectModule ,

      NgMultiSelectDropDownModule.forRoot(),

      SelectDropDownModule,
      NgSelectModule, 
      
      FormsModule,
      ReactiveFormsModule,

      NgxSpinnerModule
  ]
})
export class ConfigurationModule { }
