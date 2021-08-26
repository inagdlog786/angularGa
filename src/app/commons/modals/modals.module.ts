import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModalsComponent } from './modals.component';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SuccessfullModalsComponent } from './successfull-modals/successfull-modals.component';
import { ErrorModalsComponent } from './error-modals/error-modals.component';


@NgModule({
  declarations: [ModalsComponent, SuccessfullModalsComponent, ErrorModalsComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService] ,
  bootstrap: [AppComponent],
  entryComponents:[SuccessfullModalsComponent]
})
export class ModalsModule {
 }
