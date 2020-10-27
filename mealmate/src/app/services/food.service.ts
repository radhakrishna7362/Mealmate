import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {food,displayFood} from './food';
@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http:HttpClient) { 
  
  }

  getFood(){
    return this.http.get("http://localhost:3000/food/menu");
    // return food;
  }

  getMainFood(){
    return this.http.get("http://localhost:3000/food/home");
    // return displayFood;
  }

  getAFood(id){
    return this.http.get(`http://localhost:3000/food/particular/${id}`);
    // for(let i=0;i<food.length;i++){
    //   if(food[i].id===id){
    //     return food[i];
    //   }
    // }
  }
}
