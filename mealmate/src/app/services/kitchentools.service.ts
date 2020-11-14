import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitchentoolsService {

  constructor(private http:HttpClient) { }

  getKitchenTools(){
    return this.http.get<any>("http://localhost:3000/kitchen/menu",{
      params:new HttpParams().append('token',localStorage.getItem('token'))
    });
  }

  getMainKitchenTools(){
    return this.http.get<any>("http://localhost:3000/kitchen/home");
  }

  getAKitchenTool(id){
    return this.http.get<any>(`http://localhost:3000/kitchen/particular/${id}`);
  }
  
}
