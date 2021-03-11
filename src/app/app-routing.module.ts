import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetupNewpasswordComponent } from './setup-newpassword/setup-newpassword.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { NewUserRegistrationComponent } from './new-user-registration/new-user-registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'reenter', component: SetupNewpasswordComponent },  
  { path: 'email', component: EmailTemplateComponent },
  { path: 'registration', component: NewUserRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
