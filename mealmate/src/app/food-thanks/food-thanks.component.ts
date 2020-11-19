import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-thanks',
  templateUrl: './food-thanks.component.html',
  styleUrls: ['./food-thanks.component.css']
})
export class FoodThanksComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
        this.router.navigate(['/home']);
    }, 2000);
  }

}
