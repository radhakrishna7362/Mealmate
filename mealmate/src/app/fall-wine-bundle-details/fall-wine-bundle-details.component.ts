import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-fall-wine-bundle-details',
  templateUrl: './fall-wine-bundle-details.component.html',
  styleUrls: ['./fall-wine-bundle-details.component.css']
})
export class FallWineBundleDetailsComponent implements OnInit {

  fallwine
  qty=1;
  cart={userid:null,productid:null,qty:null,image:null,name:null,price:null,router:null};
  fav={userid:null,productid:null,name:null,router:null};
  constructor(private route:ActivatedRoute,private fallWineService:WineService,public _authService: AuthService,
    private cartService:CartService,private snackbarService:SnackbarService, private favouriteService:FavoriteService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.fallWineService.getAFallWineBundle(id).subscribe((data)=>{
      this.fallwine=data[0];
    })
  }

  favorite(){
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.fav.userid=data;
        this.fav.productid=this.fallwine._id;
        this.fav.name=this.fallwine.name;
        this.fav.router="/fallwine";
        this.favouriteService.addFav(this.fav)
          .subscribe(
            (res) => {

            },
            err => {
              if( err instanceof HttpErrorResponse ) {
                if (err.status === 401 || err.status === 500) {
                  this.snackbarService.error("Failed to add to Favourites", "Error")
                }
                if (err.status === 409) {
                  this.snackbarService.info("Already in Favourites", "Info")
                }
                if(err.status===200){
                  this.snackbarService.success("Added to Favourites Successfully..!", "Success")
                }
              }
            });
      })
    }
    else{
      this.snackbarService.warning("Please Login To Add to Favourites","Warning")
    }
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
        this.cart.productid=this.fallwine._id;
        this.cart.qty=this.qty;
        this.cart.image=this.fallwine.image;
        this.cart.name=this.fallwine.name;
        this.cart.price=this.fallwine.price;
        this.cart.router="/fallwine";
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
