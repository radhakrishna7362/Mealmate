import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodDonationService {

  constructor(private http:HttpClient) { }

  addForm(form){
    return this.http.post<any>(`/fooddonation/addform`,form);
  }
}