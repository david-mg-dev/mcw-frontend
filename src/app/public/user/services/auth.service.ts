import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IAuth } from '../types/user.types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000/api/users/login'

  constructor(private http: HttpClient) { }

  loginUser(dataAuth: IAuth): Observable<string> {
    return this.http.post<string>(`${this.url}`, dataAuth)
  }
}
