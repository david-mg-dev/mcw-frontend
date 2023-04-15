import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class PanelCryptoComponent implements AfterViewInit {
  displayedColumns: string[] = ['icon', 'name', 'asset', 'value', 'stock', 'buy', 'sell', 'amount', 'EUR']
  dataSourceCrypto = new MatTableDataSource(CRYPTO_DATA) 
  userId: string = this.getDecodeToken().user_id
  cryptoList: any[] = []
  errorBuy = ''
  filterValue = '';

  constructor(private walletService: WalletService, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value

    this.dataSourceCrypto.filterPredicate = function (record, filter) {
      return record.crypto.name.toLocaleLowerCase() == filter.toLocaleLowerCase();
    }

    this.dataSourceCrypto.filter = filterValue.trim().toLowerCase();
  }
  
  buyCryptos(element: any) {
    const dialogRef = this.dialog.open(CardBuyComponent, {
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(
      result => {
        if(result) {
          const cryptoId: string = element.crypto.crypto_id
          const amount: number = result.amount
    
          let dataBuy: IBuy = {
            wallet_id: '',
            user_id: this.userId,
            crypto_id: cryptoId,
            amount: amount
          }
    
          this.walletService.buyCrypto(dataBuy).subscribe(
            res => {
              location.reload()
              return res
            },
            err => {
              this.errorBuy = err.error.message
              alert(this.errorBuy) // TODO
            })
        }
    },
    err => {
      this.errorBuy = err.error.message
    })
  }

  sellCryptos(element: any) {
    const dialogRef = this.dialog.open(CardSellComponent, {
      width: '400px'
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
    
        this.walletService.sellCrypto(dataSell).subscribe(
          res => {
            location.reload()
            return res
          },
          err => {
            this.errorBuy = err.error.message
            alert(this.errorBuy)  //TODO
          })
      }
    })
  }
}
