import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivatePagesComponent } from '../private-pages/private-pages.component';
//import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
//import { MatTableModule } from '@angular/material/table';
//import { MatCardModule } from '@angular/material/card';
//import { MatIconModule } from '@angular/material/icon';
//import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PrivatePagesComponent,
    //HeaderDashboardComponent,
  ],
  imports: [
    CommonModule
    //MatTableModule,
    //MatCardModule,
    //MatIconModule
    //MatDialogModule
  ]
})
export class DashboardModule { }
