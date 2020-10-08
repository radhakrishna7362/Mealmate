import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  food;
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foodService.getFood().subscribe((data)=>{
      this.food=data;
    })  
  }


}
