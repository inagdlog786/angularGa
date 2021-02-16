import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PreLoginHeaderComponent } from './pre-login-header/pre-login-header.component';



@NgModule({
  declarations: [HeaderComponent, PageFooterComponent, PreLoginHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class CommonsModule { }
