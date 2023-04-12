import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IUser } from 'src/app/public/user/types/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:5000/api/users/${id}`)
  }
}
