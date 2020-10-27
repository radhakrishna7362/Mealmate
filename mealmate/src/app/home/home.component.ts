import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food;
  constructor(private foodService:FoodService){
    
  }

  ngOnInit(): void {
    this.foodService.getMainFood().subscribe((data)=>{
      this.food=data;
    })
    // this.food=this.foodservice.getMainFood();
  }

}
