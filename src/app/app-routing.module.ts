import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';
import { AuthGuard } from './share/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // TODO
  { path: 'public', loadChildren:()=>import('./public/public.module').then(m=>m.PublicModule)},
  { path: 'private', loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
