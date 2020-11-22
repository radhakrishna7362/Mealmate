import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodDonationService {

  _url="http://localhost:3000/fooddonation"
  constructor(private http:HttpClient) { }

  addForm(form){
    return this.http.post(`${this._url}/addform`,form);
  }
}