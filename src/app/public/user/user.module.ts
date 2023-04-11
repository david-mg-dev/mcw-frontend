import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from '../pages/pages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UserModule { }
