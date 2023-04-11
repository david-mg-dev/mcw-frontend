import { Component, OnInit } from '@angular/core';
import { IWallet } from '../../types/crypto.types';
import { MatTableDataSource } from '@angular/material/table';
import { WalletService } from '../../services/wallet.service';

const CRYPTO_DATA: IWallet[] = []

@Component({
  selector: 'app-panel-crypto',
  templateUrl: './panel-crypto.component.html',
  styleUrls: ['./panel-crypto.component.scss']
})
export class PanelCryptoComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'asset', 'value', 'stock']
  dataSourceCrypto = new MatTableDataSource(CRYPTO_DATA)
  userId: string = '1e287c11-265f-41bc-98a3-6ef0085c1d34'
  cryptoList: any[] = []

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.loadCryptoUser()
  }

  loadCryptoUser() {
    this.walletService.getCryptosUser(this.userId).subscribe((res) => {
      this.dataSourceCrypto.data = res
    })
  }
}
