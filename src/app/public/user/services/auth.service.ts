import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IAuth, IUser } from '../types/user.types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin = 'http://localhost:5000/api/users/login' // TODO
  private urlRegister = 'http://localhost:5000/api/users/create'

  constructor(private http: HttpClient) { }

  loginUser(dataAuth: IAuth): Observable<string> {
    return this.http.post<string>(`${this.urlLogin}`, dataAuth)
  }

  signUpUser(dataNewUser: IUser): Observable<string> {
    return this.http.post<string>(`${this.urlRegister}`, dataNewUser)
  }
}
