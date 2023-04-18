import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CyptoService } from '../../services/cypto.service'
import { ICrypto } from '../../types/crypto.types';
import { WalletService } from '../../services/wallet.service';
import jwt_decode from 'jwt-decode';

const CRYPTO_DATA: ICrypto[] = []

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'asset', 'value', 'stock', 'EUR', 'addCrypto']
  dataSourceCrypto = new MatTableDataSource(CRYPTO_DATA) 
  userId: string = this.getDecodeToken().user_id
  //cryptoList: any[] = []

  constructor(private cryptoService: CyptoService, private walletService: WalletService) { }

  ngOnInit(): void {
    this.loadCrypto()
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

  loadCrypto() {
    this.cryptoService.getCryptos().subscribe((res) => {
      this.dataSourceCrypto.data = res
    })
  }

  addCryptoToWallet(element: any) {
    let dataCrypto: any = {
      user_id: this.userId,
      crypto_id: element.crypto_id
    }

    this.walletService.addCryptoWallet(dataCrypto).subscribe((res) => {
      return res
    })
  }

}
