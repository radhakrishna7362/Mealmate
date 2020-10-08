import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { 
  
  }

  getFood(){
    return this.http.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=e82a3794a93d4652bda1b3e63fabd8ea&number=5078");
  }
}
