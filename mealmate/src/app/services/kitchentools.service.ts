import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitchentoolsService {

  _url="http://localhost:3000/kitchen"
  constructor(private http:HttpClient) { }

  getKitchenTools(){
    return this.http.get<any>(`${this._url}/menu`)
  }

  getMainKitchenTools(){
    return this.http.get<any>(`${this._url}/home`);
  }

  getAKitchenTool(id){
    return this.http.get<any>(`${this._url}/particular/${id}`);
  }
  
}
