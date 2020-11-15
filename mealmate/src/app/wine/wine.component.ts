import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

  FallWine;
  EsseWine;
  constructor(private wineService:WineService) { }

  ngOnInit(): void {
    this.wineService.getMainFallWineBundle().subscribe((data)=>{
      this.FallWine=data;
      console.log(data);
    })
    this.wineService.getMainEssentialWine().subscribe((data)=>{
      this.EsseWine=data;
    })
  }

}
