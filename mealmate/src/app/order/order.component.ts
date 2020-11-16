import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  displayedColumns=['name','quantity','price','date'];
  orders=[];
  length;
  constructor(public authService:AuthService,private orderService:OrderService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      this.authService.getUserId().subscribe(
        (res)=>{
          this.orderService.getOrders(res).subscribe(
            (data:any[])=>{
              console.log(data)
              this.orders=data
              this.length=this.orders.length;
            });
        });
    }
    else{
      this.snackbar.open('PLEASE LOGIN','OK',{
        duration: 3000,
      });
    }
  }

}