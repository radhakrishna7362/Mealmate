import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-essential-wines',
  templateUrl: './essential-wines.component.html',
  styleUrls: ['./essential-wines.component.css']
})
export class EssentialWinesComponent implements OnInit {

  name:String;
  productsList=[];
  filterList=[];
  pagedList;
  breakpoint: number = 3;  
  length: number = 0;
  pageSize: number = 10;  
  pageSizeOptions: number[] = [5,10];

  constructor(private essentialWineService:WineService) { }

  ngOnInit(): void {
    this.essentialWineService.getEssentialWine().subscribe((data:any[])=>{
      this.productsList=data;
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.pagedList = this.productsList.slice(0, 10);
      this.length = this.productsList.length;
    });
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event) { 
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

  OnChange(){
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    this.pagedList = this.filterList.slice(0, 10);
    this.length = this.filterList.length;
  }

  Search(){
    if(this.name != ""){
      this.filterList = this.productsList.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
      this.OnChange();
    }
    else if(this.name == ""){
     this.ngOnInit();
    }
  }

}
