import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent implements OnInit {

  cart=[];
  UserId;
  length;
  constructor(private cartService:CartService,public authService:AuthService,private router:Router,private snackBarService:SnackbarService,public dialogRef: MatDialogRef<CartConfirmComponent>) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe(
      (res)=>{
        this.UserId=res
        this.cartService.getCart(res).subscribe(
          (data:any[])=>{
            this.cart=data
            this.length=this.cart.length;
          });
      });
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
                this.snackBarService.success('Order Placed Successfully!!!','Success');
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
