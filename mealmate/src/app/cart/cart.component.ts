import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import {SnackbarService} from '../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartConfirmComponent } from '../cart-confirm/cart-confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns=['name','quantity','price','actions'];
  cart=[];
  UserId;
  length;
  deleteProduct={userid:null,productid:null};

  constructor(private cartService:CartService,public authService:AuthService,private snackBarService:SnackbarService,private dialog:MatDialog) { 
    
  }

  onConfirm(){
    this.dialog.open(CartConfirmComponent,{width:'300px',height:'150px'})
  }

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

  getTotalCost() {
    let total:number=0;
    this.cart.forEach(x=>{
      total=total+(x.qty*x.price);
    })
    return total;
  }

  getQuantity(){
    let total:number=0;
    this.cart.forEach(x=>{
      total=total+x.qty*1;
    })
    return total;
  }

  delete(userid,productid){
    this.deleteProduct.userid=userid;
    this.deleteProduct.productid=productid;
    this.cartService.deleteProduct(this.deleteProduct)
    .subscribe((res)=>{
      
    },err=>{
      if( err instanceof HttpErrorResponse ) {
        if (err.status === 200) {
          this.snackBarService.success('Removed Successfully from Cart!!!','Success');
        }
        this.ngOnInit();
      }
    })
  }

}