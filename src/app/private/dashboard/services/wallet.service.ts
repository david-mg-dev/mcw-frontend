import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IBuy, IWallet } from '../types/crypto.types';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
 // private url = 'http://localhost:5000/api/wallet/all' // TODO

  constructor(private http: HttpClient) { }

  getCryptosUser(id: string): Observable<IWallet[]> {
    return this.http.get<IWallet[]>(`http://localhost:5000/api/wallet/all/${id}`)
  }

  buyCrypto(dataBuy: IBuy): Observable<any> {
    return this.http.post<IBuy>('http://localhost:5000/api/wallet/buy', dataBuy)
  }

  sellCrypto(dataSell: IBuy): Observable<any> {
    return this.http.post<IBuy>('http://localhost:5000/api/wallet/sell', dataSell)
  }
}
