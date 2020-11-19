import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent implements OnInit {

  cart=[];
  UserId;
  length;
  constructor(private cartService:CartService,public authService:AuthService,private router:Router,private snackbar:MatSnackBar,public dialogRef: MatDialogRef<CartConfirmComponent>) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      this.authService.getUserId().subscribe(
        (res)=>{
          this.UserId=res
          console.log(this.UserId)
          this.cartService.getCart(res).subscribe(
            (data:any[])=>{
              console.log(data)
              this.cart=data
              this.length=this.cart.length;
            });
        });
    }
    else{
      this.snackbar.open('PLEASE LOGIN','OK',{
        duration: 3000,
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCheckout(){
    this.cartService.checkOut(this.cart)
    .subscribe(()=>{
      
    },
    err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===200){
          this.cartService.clearCart(this.cart)
          .subscribe(()=>{

          },
          err=>{
            if( err instanceof HttpErrorResponse ) {
              if (err.status === 200) {
                this.snackbar.open('ORDER PLACED SUCCESSFULLY!!','OK',{
                  duration: 3000,
                });
              }
              this.ngOnInit();
              this.dialogRef.close();
              this.router.navigate(['/thankyou'])
            }
          })
        }
      }
    })
  }

}
