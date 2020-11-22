import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _url="http://localhost:3000/order"
  constructor(private http:HttpClient) { }

  getOrders(userid){
    return this.http.get(`${this._url}/orders/${userid}`);
  }

}
