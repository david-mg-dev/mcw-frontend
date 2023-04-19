import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss']
})
export class CardBuyComponent implements OnInit {
  amount: number
  loadingBuy = false
 
  constructor(public dialogRef: MatDialogRef<CardBuyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  maxAmount() {
    this.amount = this.data.userDeposit
    this.amount = +this.amount.toFixed(4)
  }

  buy(): void {
    this.loadingBuy = true
    setTimeout(() => {
      this.dialogRef.close({ amount: this.amount })
    }, 2000)
  }

  close() {
    this.dialogRef.close()
  }
} 
