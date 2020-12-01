import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FoodService } from '../services/food.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {

  food;
  qty=1;
  cart={userid:null,productid:null,qty:null,image:null,name:null,price:null};
  constructor(private route:ActivatedRoute,private foodService:FoodService,public _authService: AuthService,
    private cartService:CartService,private snackbarService:SnackbarService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.foodService.getAFood(parseInt(id)).subscribe((data)=>{
      this.food=data[0];
    })
  }

  add(){
    if(this.qty<6)
      this.qty=this.qty+1
  }

  minus(){
    if(this.qty>1)
      this.qty=this.qty-1
  }

  onCart(){
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.cart.userid=data;
        this.cart.productid=this.food._id;
        this.cart.qty=this.qty;
        this.cart.image=this.food.image;
        this.cart.name=this.food.name;
        this.cart.price=this.food.price;
        this.cartService.addCart(this.cart)
          .subscribe(
            (res) => {
            },
            err => {
              if( err instanceof HttpErrorResponse ) {
                if (err.status === 401 || err.status === 500) {
                  this.snackbarService.error("Failed to add to Cart", "Error")
                }
                if (err.status === 409) {
                  this.snackbarService.info("Already in Cart", "Info")
                }
                if(err.status===200){
                  this.snackbarService.success("Added to Cart Successfully..!", "Success")
                }
              }
            });
      })
    }
    else{
      this.snackbarService.warning("Please Login To Add to Cart","Warning")
    }
  }

}
