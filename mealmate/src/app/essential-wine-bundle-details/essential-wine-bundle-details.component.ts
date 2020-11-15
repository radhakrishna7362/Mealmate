import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-essential-wine-bundle-details',
  templateUrl: './essential-wine-bundle-details.component.html',
  styleUrls: ['./essential-wine-bundle-details.component.css']
})
export class EssentialWineBundleDetailsComponent implements OnInit {

  essentialwine;
  constructor(private route:ActivatedRoute,private essentialWineService:WineService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    // this.food=this.foodService.getAFood(parseInt(id));
    this.essentialWineService.getAEssentialWine(parseInt(id)).subscribe((data)=>{
      this.essentialwine=data[0];
      console.log(this.essentialwine);
    })
  }

}
