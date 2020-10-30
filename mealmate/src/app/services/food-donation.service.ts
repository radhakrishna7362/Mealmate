import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodDonationService {

  constructor(private http:HttpClient) { }

  addForm(form){
    return this.http.post("http://localhost:3000/fooddonation/addform",form);
  }
}