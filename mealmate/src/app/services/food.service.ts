import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http:HttpClient) { 
  
  }

  getFood(){
    return this.http.get<any>(`/food/menu`);
  }

  getMainFood(){
    return this.http.get<any>(`/food/home`);
  }

  getAFood(id){
    return this.http.get<any>(`/food/particular/${id}`);
  }
}
