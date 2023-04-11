import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PanelCryptoComponent } from './components/panel-crypto/panel-crypto.component';
//import { CardBuyComponent } from './components/card-buy/card-buy.component';
//import { CardSellComponent } from './components/card-sell/card-sell.component';
import { PrivatePagesComponent } from '../private-pages/private-pages.component';



@NgModule({
  declarations: [
    PrivatePagesComponent,
    //PanelCryptoComponent,
    //CardBuyComponent,
    //CardSellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
