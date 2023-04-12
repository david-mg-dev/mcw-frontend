import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivatePagesComponent } from './private-pages/private-pages.component';
import { PanelCryptoComponent } from './dashboard/components/panel-crypto/panel-crypto.component';
import { CardBuyComponent } from './dashboard/components/card-buy/card-buy.component';
import { CardSellComponent } from './dashboard/components/card-sell/card-sell.component';
import { HeaderDashboardComponent } from './dashboard/components/header-dashboard/header-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    PrivatePagesComponent,
    PanelCryptoComponent,
    CardBuyComponent,
    CardSellComponent,
    HeaderDashboardComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule
  ]
})
export class PrivateModule { }
