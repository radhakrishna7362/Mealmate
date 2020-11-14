import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart;
  UserId;
  constructor(private cartService:CartService,public authService:AuthService,private router:Router,private snackbar:MatSnackBar) { 
    
  }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      this.authService.getUserId().subscribe(
        (res)=>{
          this.UserId=res
          console.log(this.UserId)
          this.cartService.getCart(this.UserId).subscribe(
            (data)=>{
              console.log(data)
              this.cart=data
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

}
