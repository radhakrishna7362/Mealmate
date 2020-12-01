import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addCart(cart){
    return this.http.post<any>(`/cart/add`,cart);
  }

  getCart(UserId){
    return this.http.get<any>(`/cart/get/${UserId}`);
  }

  deleteProduct(cart){
    return this.http.delete<any>(`/cart/remove/${cart.userid}/${cart.productid}`);
  }

  checkOut(cart){
    return this.http.post<any>(`/order/move`,cart);
  }

  clearCart(cart){
    return this.http.delete<any>(`/cart/removeAll/${cart[0].userid}`);
  }
}
