import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns=['name','quantity','price','actions'];
  // displayedColumns=['name','quantity','price'];
  cart=[];
  UserId;
  // productsList=[];
  length;
  // filterList=[];
  // pagedList;
  // breakpoint: number = 3;  to adjust to screen
  // MatPaginator Inputs
  // length: number = 0;
  // pageSize: number = 10;  displaying three cards each row
  // pageSizeOptions: number[] = [5,10];
  deleteProduct={userid:null,productid:null};

  constructor(private cartService:CartService,public authService:AuthService,private router:Router,private snackbar:MatSnackBar) { 
    
  }

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
              // this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
              // this.pagedList = this.productsList.slice(0, 10);
              // this.length = this.productsList.length;
            });
        });
    }
    else{
      this.snackbar.open('PLEASE LOGIN','OK',{
        duration: 3000,
      });
      // this.router.navigate(['/login']);
    }
  }

  // OnPageChange(event: PageEvent){
  //   let startIndex = event.pageIndex * event.pageSize;
  //   let endIndex = startIndex + event.pageSize;
  //   if(endIndex > this.length){
  //     endIndex = this.length;
  //   }
  //   this.pagedList = this.productsList.slice(startIndex, endIndex);
  // }

  // onResize(event) { //to adjust to screen size
  //   this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  // }

  // OnChange(){
  //   this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  //   this.pagedList = this.filterList.slice(0, 10);
  //   this.length = this.filterList.length;
  // }

  // Search(){
  //   if(this.name != ""){
  //     this.filterList = this.productsList.filter(res=>{
  //       return res.title.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //     });
  //     console.log(this.filterList);
  //     this.OnChange();
  //   }
  //   else if(this.name == ""){
  //    this.ngOnInit();
  //   }
  // }

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
    console.log(userid,productid)
    this.deleteProduct.userid=userid;
    this.deleteProduct.productid=productid;
    this.cartService.deleteProduct(this.deleteProduct)
    .subscribe((res)=>{
      
    },err=>{
      if( err instanceof HttpErrorResponse ) {
        if (err.status === 200) {
          this.snackbar.open('DELETED SUCCESSFULLY!!','OK',{
            duration: 3000,
          });
        }
        this.ngOnInit();
      }
    })
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
            }
          })
        }
      }
    })
  }

}