import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fall-wine-bundle-details',
  templateUrl: './fall-wine-bundle-details.component.html',
  styleUrls: ['./fall-wine-bundle-details.component.css']
})
export class FallWineBundleDetailsComponent implements OnInit {

  fallwine
  constructor(private route:ActivatedRoute,private fallWineService:WineService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    // this.food=this.foodService.getAFood(parseInt(id));
    this.fallWineService.getAFallWineBundle(parseInt(id)).subscribe((data)=>{
      this.fallwine=data[0];
      console.log(this.fallwine);
    })
  }

}
