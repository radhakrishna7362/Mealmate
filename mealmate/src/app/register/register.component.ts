import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = { name: "", email: "", password: "" }
  
  registerData={
    name:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  }
  
  hide = true;
  
  emailError() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('pattern')){
      return "This doesn't look like an email address";
    }
  }
  passwordError(){
    if (this.registerData.password.hasError('required')) {
      return 'Password is required';
    }
    else if(this.registerData.password.hasError('minlength')){
      return 'Password must be a minimum length of 6';
    }
  }
  nameError(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('pattern')){
      return 'Name must contain only Characters';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  constructor(private _auth: AuthService,
              private _router: Router,private snackbarService:SnackbarService) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerUserData.email=this.registerData.email.value;
    this.registerUserData.name=this.registerData.name.value;
    this.registerUserData.password=this.registerData.password.value;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.snackbarService.success("User Registered Succesffully!!!",'Congrats')
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbarService.info("Oops Email Already Registered!!!",'Info')
            this.registerData.email.reset();
            this.registerData.name.reset();
            this.registerData.password.reset();
            this.registerUserData.name="";
            this.registerUserData.email="";
            this.registerUserData.password="";
          }
        }
      }
    )      
  }
}