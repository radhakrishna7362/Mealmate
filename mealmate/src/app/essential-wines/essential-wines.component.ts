import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-essential-wines',
  templateUrl: './essential-wines.component.html',
  styleUrls: ['./essential-wines.component.css']
})
export class EssentialWinesComponent implements OnInit {

  wines;
  constructor(private essentialWineService:WineService) { }

  ngOnInit(): void {
    this.essentialWineService.getEssentialWine().subscribe((data)=>{
      this.wines=data
      console.log(this.wines);
    });
  }

}
