import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivatePagesComponent } from '../private-pages/private-pages.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PrivatePagesComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DashboardModule { }
