import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePagesComponent } from './private-pages/private-pages.component';
import { PanelCryptoComponent } from './dashboard/components/panel-crypto/panel-crypto.component';

const routes: Routes = [
  { path: '', component: PrivatePagesComponent, children: [
    { path: 'dashboard', component: PanelCryptoComponent },
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
