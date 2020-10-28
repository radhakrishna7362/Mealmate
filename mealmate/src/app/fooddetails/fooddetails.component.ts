import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FoodService } from '../services/food.service';
// import { food } from '../services/food';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {

  food;
  constructor(private route:ActivatedRoute,private foodService:FoodService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    // this.food=this.foodService.getAFood(parseInt(id));
    this.foodService.getAFood(parseInt(id)).subscribe((data)=>{
      this.food=data[0];
      console.log(this.food);
    })
  }
}
