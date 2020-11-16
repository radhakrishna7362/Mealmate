import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrders(userid){
    return this.http.get(`http://localhost:3000/order/orders/${userid}`);
  }

}
