import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetupNewpasswordComponent } from './setup-newpassword/setup-newpassword.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { NewUserRegistrationComponent } from './new-user-registration/new-user-registration.component';
import { AllComponent } from './test/all/all.component';
import { HomeComponent } from './home/home.component';
import { WolterskluwerComponent } from './redirect/wolterskluwer/wolterskluwer.component';

const routes: Routes = [
  { path: '', component: WolterskluwerComponent, pathMatch:'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'reenter', component: SetupNewpasswordComponent },  
  { path: 'email', component: EmailTemplateComponent },
  { path: 'registration', component: NewUserRegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: AllComponent },  
  // { path: 'modules/exploration', loadChildren: () => import('./modules/exploration/exploration.module').then(m => m.ExplorationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
