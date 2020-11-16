import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fall-wine-bundle-details',
  templateUrl: './fall-wine-bundle-details.component.html',
  styleUrls: ['./fall-wine-bundle-details.component.css']
})
export class FallWineBundleDetailsComponent implements OnInit {

  fallwine
  qty=1;
  cart={userid:null,productid:null,qty:null,image:null,name:null,price:null};
  constructor(private route:ActivatedRoute,private fallWineService:WineService,public _authService: AuthService,
    private cartService:CartService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    // this.food=this.foodService.getAFood(parseInt(id));
    this.fallWineService.getAFallWineBundle(parseInt(id)).subscribe((data)=>{
      this.fallwine=data[0];
      console.log(this.fallwine);
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
        this.cart.productid=this.fallwine.id;
        this.cart.qty=this.qty;
        this.cart.image=this.fallwine.image;
        this.cart.name=this.fallwine.name;
        this.cart.price=this.fallwine.price;
        this.cartService.addCart(this.cart)
          .subscribe(
            (res) => {
              console.log(res);
            },
            err => {
              if( err instanceof HttpErrorResponse ) {
                if (err.status === 401 || err.status === 500) {
                  this.snackbar.open('Error Failed Adding to Cart', 'OK', {
                    duration: 3000,
                  });
                }
                if (err.status === 409) {
                  this.snackbar.open('Already in Cart', 'OK', {
                    duration: 3000,
                  });
                }
                if(err.status===200){
                  this.snackbar.open('Added to Cart Successfully!!', 'OK', {
                    duration: 3000,
                  })
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
