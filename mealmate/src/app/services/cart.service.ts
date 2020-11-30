import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addCart(cart){
    return this.http.post(`/cart/add`,cart);
  }

  getCart(UserId){
    return this.http.get(`/cart/get/${UserId}`);
  }

  deleteProduct(cart){
    return this.http.delete(`/cart/remove/${cart.userid}/${cart.productid}`);
  }

  checkOut(cart){
    return this.http.post(`/order/move`,cart);
  }

  clearCart(cart){
    return this.http.delete(`/cart/removeAll/${cart[0].userid}`);
  }
}
