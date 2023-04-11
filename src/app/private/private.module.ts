import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivatePagesComponent } from './private-pages/private-pages.component';
import { PanelCryptoComponent } from './dashboard/components/panel-crypto/panel-crypto.component';
import { CardBuyComponent } from './dashboard/components/card-buy/card-buy.component';
import { CardSellComponent } from './dashboard/components/card-sell/card-sell.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    PrivatePagesComponent,
    PanelCryptoComponent,
    CardBuyComponent,
    CardSellComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class PrivateModule { }
