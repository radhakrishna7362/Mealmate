import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mealmate';
  UserId;
  User;
  constructor(public _authService: AuthService,private _router: Router,public loaderService: SpinnerService){
    
  }

  ngOnInit(){
    if(this._authService.subsVar===undefined){
      this._authService.subsVar=this._authService.invokeAppComponent.subscribe(
        (res)=>{
          this._authService.getUserId().subscribe((data)=>{
            this.UserId=data
            this._authService.getUserName(this.UserId).subscribe((name)=>{
              this.User=name;
            })
          })
        }
      )
    }
  }

  logout(){
    this._authService.logoutUser();
    this._authService.subsVar=undefined;
    this.User=null;
    this.UserId=null;
    this._router.navigate(['/home'])
  }

}