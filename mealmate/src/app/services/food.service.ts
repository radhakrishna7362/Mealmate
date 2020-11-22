import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  _url="http://localhost:3000/food"
  constructor(private http:HttpClient) { 
  
  }

  getFood(){
    return this.http.get(`${this._url}/menu`);
  }

  getMainFood(){
    return this.http.get(`${this._url}/home`);
  }

  getAFood(id){
    return this.http.get(`${this._url}/particular/${id}`);
  }
}
