import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuth } from '../../types/user.types';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  dataAuth: IAuth = {} as IAuth
  errorLogin = ''

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
    })
  }

  login() {
    if(this.loginForm.valid) {
      this.dataAuth = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }
      this.authService.loginUser(this.dataAuth).subscribe(
      token => {
        sessionStorage.setItem('token', token)
        this.router.navigate([]) // TODO
      },
      err => {
        this.errorLogin = err.error.message
        console.log(this.errorLogin)
      })
    }
  }
}
