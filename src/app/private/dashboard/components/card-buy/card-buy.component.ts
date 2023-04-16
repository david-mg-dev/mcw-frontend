import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-buy',
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss']
})
export class CardBuyComponent implements OnInit {
  amount: number
  loadingBuy = false
 
  constructor(public dialogRef: MatDialogRef<CardBuyComponent>) { }

  ngOnInit(): void {
  }

  buy(): void {
    this.loadingBuy = true
    setTimeout(() => {
      this.dialogRef.close({ amount: this.amount })
    }, 2000)
  }
} 
