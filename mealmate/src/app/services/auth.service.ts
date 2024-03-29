import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Subscription } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private snackbarService:SnackbarService) { }

    invokeAppComponent=new EventEmitter();
    subsVar:Subscription;

    registerUser(user) {
      return this.http.post<any>(`/user/register`, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(`/user/login`, user)
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      this.snackbarService.info('Logged Out Successfully!!!','Info')
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
      return this.http.get<any>(`/user/userid`,{
        params:new HttpParams().append('token',localStorage.getItem('token'))
      })
    }

    getUserName(id){
      return this.http.get<any>(`/user/username/${id}`)
    }

    getProfile(id){
      return this.http.get<any>(`/user/profile/${id}`)
    }

    editProfile(id,user){
      return this.http.patch<any>(`/user/edit-profile/${id}`,user);
    }

    deleteaccount(id){
      return this.http.delete<any>(`/user/delete/${id}`);
    }
}