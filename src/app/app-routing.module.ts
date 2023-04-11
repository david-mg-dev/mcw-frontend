import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // TODO
  { path: 'public', loadChildren:()=>import('./public/public.module').then(m=>m.PublicModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
