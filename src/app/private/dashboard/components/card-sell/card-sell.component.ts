import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-sell',
  templateUrl: './card-sell.component.html',
  styleUrls: ['./card-sell.component.scss']
})
export class CardSellComponent implements OnInit {
  amount: number

  constructor(public dialogRef: MatDialogRef<CardSellComponent>) { }

  ngOnInit(): void {
  }

  sell(): void {
    this.dialogRef.close({ amount: this.amount })
  }

}
