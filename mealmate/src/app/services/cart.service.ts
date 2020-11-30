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
    return this.http.post(`${this._url}/add`,cart);
  }

  getCart(UserId){
    return this.http.get(`${this._url}/get/${UserId}`);
  }

  deleteProduct(cart){
    return this.http.delete(`${this._url}/remove/${cart.userid}/${cart.productid}`);
  }

  checkOut(cart){
    return this.http.post(`${this._ordelUrl}/move`,cart);
  }

  clearCart(cart){
    return this.http.delete(`${this._url}/removeAll/${cart[0].userid}`);
  }
}
