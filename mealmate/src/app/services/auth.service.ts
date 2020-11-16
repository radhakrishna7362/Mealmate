import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/user/register";
  private _loginUrl = "http://localhost:3000/user/login";

  constructor(private http: HttpClient,
    private _router: Router) { }

    invokeAppComponent=new EventEmitter();
    subsVar:Subscription;

    registerUser(user) {
      return this.http.post<any>(this._registerUrl, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }
  
    logoutUser() {
      localStorage.removeItem('token')
    }
  
    onLogin(){
      this.invokeAppComponent.emit();
    }

    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }

    getUserId(){
      return this.http.get("http://localhost:3000/user/userid",{
        params:new HttpParams().append('token',localStorage.getItem('token'))
      })
    }

    getUserName(id){
      return this.http.get(`http://localhost:3000/user/username/${id}`)
    }
}