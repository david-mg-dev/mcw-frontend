import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import { SuccesDialogComponent } from './componentes/succes-dialog/succes-dialog.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    SuccesDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ShareModule { }
