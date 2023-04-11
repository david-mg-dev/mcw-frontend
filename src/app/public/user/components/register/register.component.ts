import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../types/user.types';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  dataRegister: IUser = {} as IUser

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])], // TODO
      fullname: ['', Validators.compose([Validators.required])],
      deposit: [0, Validators.compose([Validators.required, Validators.pattern('[0-1]*')])]
    })
  }

  signUp() {
    if(this.registerForm.valid) {
      this.dataRegister = {
        username: this.registerForm.controls['username'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        fullname: this.registerForm.controls['fullname'].value,
        deposit: this.registerForm.controls['deposit'].value
      }
      this.authService.signUpUser(this.dataRegister).subscribe(
        data => {
          this.router.navigate(['/public/login'])
          return data
        },
        err => {
          return err
        }
      )
    }
  }
}
