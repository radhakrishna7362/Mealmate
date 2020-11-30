import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData ={
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
  }

  loginData={email:"",password:""}

  emailError() {
    if (this.loginUserData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.loginUserData.email.hasError('pattern')){
      return "This doesn't look like an email address";
    }
  }
  passwordError(){
    if (this.loginUserData.password.hasError('required')) {
      return 'Password is required';
    }
    else if(this.loginUserData.password.hasError('minlength')){
      return 'Password must be a minimum length of 6';
    }
  }

  hide = true;
  
  constructor(private _auth: AuthService,
              private _router: Router,private snackbarService:SnackbarService) { }

  ngOnInit() {
  }

  loginUser () {
    this.loginData.email=this.loginUserData.email.value;
    this.loginData.password=this.loginUserData.password.value;
    this._auth.loginUser(this.loginData)
    .subscribe(
      res => {
        this.snackbarService.success("Logged In Successfully!!!",'Congrats');
        localStorage.setItem('token', res.token)
        this._auth.onLogin();
        this._router.navigate(['/home'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.snackbarService.error("Invalid Email Or Password!!!",'Error');
            this.loginUserData.email.reset();
            this.loginUserData.password.reset();
            this.loginData.email='';
            this.loginData.password='';
          }
        }
      }
    ) 
  }

}
