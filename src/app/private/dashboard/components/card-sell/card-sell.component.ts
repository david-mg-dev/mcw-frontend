import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-sell',
  templateUrl: './card-sell.component.html',
  styleUrls: ['./card-sell.component.scss']
})
export class CardSellComponent implements OnInit {
  amount: number
  loadingSell = false
  
  constructor(public dialogRef: MatDialogRef<CardSellComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  maxAmount() {
    this.amount = this.data.amountCrypto
    this.amount = +this.amount.toFixed(4)
  }

  sell(): void {
    this.loadingSell = true
    setTimeout(() => {
      this.dialogRef.close({ amount: this.amount })
    }, 2000)
  }

  close() {
    this.dialogRef.close()
  }

}
