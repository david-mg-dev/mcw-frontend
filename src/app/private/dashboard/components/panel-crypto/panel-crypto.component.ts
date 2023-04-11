import { Component, OnInit } from '@angular/core';
import { IBuy, IWallet } from '../../types/crypto.types';
import { MatTableDataSource } from '@angular/material/table';
import { WalletService } from '../../services/wallet.service';
import { MatDialog } from '@angular/material/dialog';
import { CardBuyComponent } from '../card-buy/card-buy.component';
import { CardSellComponent } from '../card-sell/card-sell.component';
import jwt_decode from 'jwt-decode';

const CRYPTO_DATA: IWallet[] = []

@Component({
  selector: 'app-panel-crypto',
  templateUrl: './panel-crypto.component.html',
  styleUrls: ['./panel-crypto.component.scss']
})
export class PanelCryptoComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'asset', 'value', 'stock', 'buy', 'sell', 'amount',]
  dataSourceCrypto = new MatTableDataSource(CRYPTO_DATA)
  userId: string = this.getDecodeToken().user_id
  cryptoList: any[] = []

  constructor(private walletService: WalletService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCryptoUser()
  }

  getDecodeToken(): any { // TODO Implementar en servicio
    const token = window.sessionStorage.getItem('token')
    if (token !== null) {
      try {
        return jwt_decode(token)
      } catch (error) {
        return null
      }
    }
    return null
  }

  loadCryptoUser() {
    this.walletService.getCryptosUser(this.userId).subscribe((res) => {
      this.dataSourceCrypto.data = res
    })
  }

  buyCryptos(element: any) {
    const dialogRef = this.dialog.open(CardBuyComponent, {
      width: '250px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const cryptoId: string = element.crypto.crypto_id
        const amount: number = result.amount
    
        let dataBuy: IBuy = {
          wallet_id: '',
          user_id: this.userId,
          crypto_id: cryptoId,
          amount: amount
        }
        console.log(dataBuy)
    
        this.walletService.buyCrypto(dataBuy).subscribe(res => {
          return res
        })
      }
    })
  }

  sellCryptos(element: any) {
    const dialogRef = this.dialog.open(CardSellComponent, {
      width: '250px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const cryptoId: string = element.crypto.crypto_id
        const amount: number = result.amount 
    
        let dataSell: IBuy = {
          wallet_id: '',
          user_id: this.userId,
          crypto_id: cryptoId,
          amount: amount
        }
        console.log(dataSell)
    
        this.walletService.sellCrypto(dataSell).subscribe(res => {
          return res
        })
      }
    })
  }
}
