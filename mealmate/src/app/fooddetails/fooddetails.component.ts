import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FoodService } from '../services/food.service';
import { food } from '../services/food';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {

  food;
  breakpoint: number = 2;  //to adjust to screen
  constructor(private route:ActivatedRoute,private foodService:FoodService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.food=this.foodService.getAFood(parseInt(id));
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
    console.log(this.food);
  }

  onResize(event) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

}
