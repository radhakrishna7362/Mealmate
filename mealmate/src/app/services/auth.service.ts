import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = "http://localhost:3000/user";

  constructor(private http: HttpClient,
    private _router: Router) { }

    invokeAppComponent=new EventEmitter();
    subsVar:Subscription;

    registerUser(user) {
      return this.http.post<any>(`${this._url}/register`, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(`${this._url}/login`, user)
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
      return this.http.get(`${this._url}/userid`,{
        params:new HttpParams().append('token',localStorage.getItem('token'))
      })
    }

    getUserName(id){
      return this.http.get(`${this._url}/username/${id}`)
    }
}