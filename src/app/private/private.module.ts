import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivatePagesComponent } from './private-pages/private-pages.component';
import { PanelCryptoComponent } from './dashboard/components/panel-crypto/panel-crypto.component';
import { CardBuyComponent } from './dashboard/components/card-buy/card-buy.component';
import { CardSellComponent } from './dashboard/components/card-sell/card-sell.component';


@NgModule({
  declarations: [
    PrivatePagesComponent,
    PanelCryptoComponent,
    CardBuyComponent,
    CardSellComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
