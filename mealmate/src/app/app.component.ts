import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mealmate';
  UserId;
  User;
  constructor(public _authService: AuthService){
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.UserId=data
        console.log(this.UserId)
        this._authService.getUserName(this.UserId).subscribe((name)=>{
          this.User=name;
        })
      })
    }
  }
}