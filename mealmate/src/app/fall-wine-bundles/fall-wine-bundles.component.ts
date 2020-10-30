import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-fall-wine-bundles',
  templateUrl: './fall-wine-bundles.component.html',
  styleUrls: ['./fall-wine-bundles.component.css']
})
export class FallWineBundlesComponent implements OnInit {

  wines;
  constructor(private fallWineService:WineService) { }

  ngOnInit(): void {
    this.fallWineService.getFallWineBundle().subscribe((data)=>{
      this.wines=data
      console.log(this.wines);
    });
  }

}
