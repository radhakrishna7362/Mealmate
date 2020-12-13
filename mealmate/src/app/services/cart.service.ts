import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  _url="http://localhost:3000/cart";
  _ordelUrl="http://localhost:3000/order"

  constructor(private http:HttpClient) { }

  addCart(cart){
    return this.http.post<any>(`${this._url}/add`,cart);
  }

  getCart(UserId){
    return this.http.get<any>(`${this._url}/get/${UserId}`);
  }

  deleteProduct(id){
    return this.http.delete<any>(`${this._url}/remove/${id}`);
  }

  checkOut(cart){
    return this.http.post<any>(`${this._ordelUrl}/move`,cart);
  }

  clearCart(cart){
    return this.http.delete<any>(`${this._url}/removeAll/${cart[0].userid}`);
  }

  deleteCart(userid){
    return this.http.delete<any>(`${this._url}/removeAll/${userid}`);
  }
}
