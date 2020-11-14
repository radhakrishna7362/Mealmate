import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = { username: "", password: "" }

  constructor(private _auth: AuthService,
              private _router: Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.snackbar.open('INVALID USERNAME OR PASSWORD', 'OK', {
              duration: 3000,
            });
            this.loginUserData.username="";
            this.loginUserData.password="";
          }
        }
      }
    ) 
  }

}
