import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../types/user.types';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/share/componentes/error-dialog/error-dialog.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  dataRegister: IUser = {} as IUser
  errorRegister: ''

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])], // TODO
      fullname: ['', Validators.compose([Validators.required])],
      deposit: [0, Validators.compose([Validators.required])]
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
          this.errorRegister = err.error.message
          this.dialog.open(ErrorDialogComponent, {
            data: { message: this.errorRegister }
          })
        }
      )
    }
  }
}
