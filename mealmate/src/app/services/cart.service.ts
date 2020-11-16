import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addCart(cart){
    console.log(cart);
    return this.http.post("http://localhost:3000/cart/add",cart);
  }

  getCart(UserId){
    return this.http.get(`http://localhost:3000/cart/get/${UserId}`);
  }

  deleteProduct(cart){
    console.log(cart)
    return this.http.delete(`http://localhost:3000/cart/remove/${cart.userid}/${cart.productid}`);
  }
}
