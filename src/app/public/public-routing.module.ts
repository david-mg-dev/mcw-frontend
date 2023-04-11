import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
