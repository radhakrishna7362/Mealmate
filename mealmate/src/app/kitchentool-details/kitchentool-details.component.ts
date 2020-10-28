import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { KitchentoolsService } from '../services/kitchentools.service';

@Component({
  selector: 'app-kitchentool-details',
  templateUrl: './kitchentool-details.component.html',
  styleUrls: ['./kitchentool-details.component.css']
})
export class KitchentoolDetailsComponent implements OnInit {

  food
  constructor(private route:ActivatedRoute,private kitchentoolsService:KitchentoolsService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    // this.food=this.foodService.getAFood(parseInt(id));
    this.kitchentoolsService.getAKitchenTool(parseInt(id)).subscribe((data)=>{
      this.food=data[0];
      console.log(this.food);
    })
  }

}
