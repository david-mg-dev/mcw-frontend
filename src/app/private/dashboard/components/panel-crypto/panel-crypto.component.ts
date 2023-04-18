import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { IBuy, IWallet } from '../../types/crypto.types';
import { MatTableDataSource } from '@angular/material/table';
import { WalletService } from '../../services/wallet.service';
import { MatDialog } from '@angular/material/dialog';
import { CardBuyComponent } from '../card-buy/card-buy.component';
import { CardSellComponent } from '../card-sell/card-sell.component';
import jwt_decode from 'jwt-decode';
import { ErrorDialogComponent } from 'src/app/share/componentes/error-dialog/error-dialog.component';
import { SuccesDialogComponent } from 'src/app/share/componentes/succes-dialog/succes-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IUser } from 'src/app/public/user/types/user.types';
import { UserService } from '../../services/user.service';

const CRYPTO_DATA: IWallet[] = []

@Component({
  selector: 'app-panel-crypto',
  templateUrl: './panel-crypto.component.html',
  styleUrls: ['./panel-crypto.component.scss']
})
export class PanelCryptoComponent implements AfterViewInit {
  //@Input() userData: IUser | undefined;
  displayedColumns: string[] = ['icon', 'name', 'asset', 'value', 'stock', 'buy', 'sell', 'amount', 'EUR']
  dataSourceCrypto = new MatTableDataSource(CRYPTO_DATA) 
  userId: string = this.getDecodeToken().user_id
  userData: IUser 
  cryptoList: any[] = []
  errorBuy = ''
  filterValue = '';
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private walletService: WalletService, public dialog: MatDialog, private userService: UserService) { }

  ngAfterViewInit(): void {
    this.loadUser()
    console.log(this.userData)
    this.loadCryptoUser()
    this.dataSourceCrypto.paginator = this.paginator 
    this.dataSourceCrypto.sort = this.sort;
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

  loadUser() {
    this.userService.getUser(this.userId).subscribe((res) => {
      this.userData = res
      console.log(this.userData)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value

    this.dataSourceCrypto.filterPredicate = function (record, filter) {
      return record.crypto.name.toLocaleLowerCase() == filter.toLocaleLowerCase();
    }

    this.dataSourceCrypto.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceCrypto.paginator) {
      this.dataSourceCrypto.paginator.firstPage();
    }
  }
  
  buyCryptos(element: any) {
    const dialogRef = this.dialog.open(CardBuyComponent, {
      width: '400px',
      data: { errorBuy: this.errorBuy, userDeposit: this.userData.deposit }
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
              this.dialog.open(SuccesDialogComponent, {
                data: { message: 'Compra Realizada Con Exito' }
              })
              return res
            },
            err => {
              this.errorBuy = err.error.message
              this.dialog.open(ErrorDialogComponent, {
                data: { message: this.errorBuy }
              }).afterClosed().subscribe(() => {
                this.buyCryptos(element); // TODO
              });
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
            this.dialog.open(SuccesDialogComponent, {
              data: { message: 'Venta Realizada Con Exito' }
            })
            return res
          },
          err => {
            this.errorBuy = err.error.message
            this.dialog.open(ErrorDialogComponent, {
              data: { message: this.errorBuy }
            })
          })
      }
    })
  }
}
