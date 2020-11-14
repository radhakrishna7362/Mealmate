import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FoodService } from '../services/food.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
// import { food } from '../services/food';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {

  food;
  cart={userid:null,productid:null};
  constructor(private route:ActivatedRoute,private foodService:FoodService,public _authService: AuthService,
    private cartService:CartService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    // this.food=this.foodService.getAFood(parseInt(id));
    this.foodService.getAFood(parseInt(id)).subscribe((data)=>{
      this.food=data[0];
      console.log(this.food);
    })
  }

  onCart(){
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.cart.userid=data;
        this.cart.productid=this.food.id;
        this.cartService.addCart(this.cart)
          .subscribe(
            res => {
              this.snackbar.open('Added to Cart Successfully!!', 'OK', {
                duration: 3000,
              });
            },
            err => {
              if( err instanceof HttpErrorResponse ) {
                if (err.status === 401) {
                  this.snackbar.open('Error Failed Adding to Cart', 'OK', {
                    duration: 3000,
                  });
                }
              }
            });
      })
    }
    else{
      this.snackbar.open('Please Login To Add to Cart', 'OK', {
        duration: 3000,
      });
    }
  }

}
