import { Component, OnInit } from '@angular/core';
import { UserService } from '../dashboard/services/user.service';
import jwt_decode from 'jwt-decode';
import { IUser } from 'src/app/public/user/types/user.types';

@Component({
  selector: 'app-private-pages',
  templateUrl: './private-pages.component.html',
  styleUrls: ['./private-pages.component.scss']
})
export class PrivatePagesComponent implements OnInit {
  userId: string = this.getDecodeToken().user_id
  userData: IUser | undefined

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser()
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

  loadUser() {
    this.userService.getUser(this.userId).subscribe((res) => {
      this.userData = res
      //console.log(this.userData.deposit) // TODO
    })
  }
}
