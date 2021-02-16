import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './commons/header/header.component';
import { PageFooterComponent } from './commons/page-footer/page-footer.component';
import { ConfigurationModule } from './modules/configuration/configuration.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
