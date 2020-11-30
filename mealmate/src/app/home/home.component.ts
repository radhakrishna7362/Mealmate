import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KitchentoolsService } from '../services/kitchentools.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food;
  kitchentls;
  UserId;
  User;
  constructor(private foodService:FoodService,public _authService: AuthService,private snackbar:MatSnackBar,private kitchentoolService:KitchentoolsService,private _router: Router){
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.UserId=data;
        this._authService.getUserName(this.UserId).subscribe((name)=>{
          this.User=name;
        })
      })
    }
  }

  ngOnInit(): void {
    if(this._authService.loggedIn()){
      this._authService.onLogin();
    }
    this.foodService.getMainFood().subscribe((data)=>{
      this.food=data;
    })
    this.kitchentoolService.getMainKitchenTools().subscribe((data:any[])=>{
      this.kitchentls=data;
    },
    err => {
      if( err instanceof HttpErrorResponse ) {
        if (err.status === 401) {
          this._router.navigate(['/login'])
        }
      }
    })
  }

}
