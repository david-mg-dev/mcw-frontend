import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-succes-dialog',
  templateUrl: './succes-dialog.component.html',
  styleUrls: ['./succes-dialog.component.scss']
})
export class SuccesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SuccesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

  ngOnInit(): void {
  }

  onClose() {
    location.reload()
    this.dialogRef.close()
  }
}
