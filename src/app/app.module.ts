import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './commons/header/header.component';
import { PageFooterComponent } from './commons/page-footer/page-footer.component';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { PreLoginHeaderComponent } from './commons/pre-login-header/pre-login-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupNewpasswordComponent } from './setup-newpassword/setup-newpassword.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NewUserRegistrationComponent } from './new-user-registration/new-user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { AllComponent } from './test/all/all.component';
import { HomeComponent } from './home/home.component';
import { ExplorationModule } from './modules/exploration/exploration.module';
import { WolterskluwerComponent } from './redirect/wolterskluwer/wolterskluwer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PageFooterComponent,
    PreLoginHeaderComponent,
    SetupNewpasswordComponent,
    EmailTemplateComponent,
    NewUserRegistrationComponent,
    AllComponent,
    HomeComponent,
    WolterskluwerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ConfigurationModule,
    ShowHidePasswordModule,
    NgxBootstrapMultiselectModule,
    FormsModule,
    ReactiveFormsModule,
    ExplorationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
