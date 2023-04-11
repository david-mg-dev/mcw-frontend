import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../types/user.types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  dataRegister: IUser = {} as IUser

  constructor(private fb: FormBuilder) { }

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
    
  }

}
