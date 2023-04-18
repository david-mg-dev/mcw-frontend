import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICrypto } from '../types/crypto.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CyptoService {

  constructor(private http: HttpClient) { }

  getCryptos(): Observable<ICrypto[]> {
    return this.http.get<ICrypto[]>('http://localhost:5000/api/cryptos/all')
  }
}
