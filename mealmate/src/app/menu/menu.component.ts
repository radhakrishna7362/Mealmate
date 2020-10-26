import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // food;
  name:String;
  productsList=[];
  filterList=[];
  pagedList;
  breakpoint: number = 3;  //to adjust to screen
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 10;  //displaying three cards each row
  pageSizeOptions: number[] = [5,10];

  constructor(private foodService:FoodService) {
    
  }

  ngOnInit(): void {
    // this.foodService.getFood().subscribe((data)=>{
    //   this.food=data;
    // })
    this.productsList=this.foodService.getFood();
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    this.pagedList = this.productsList.slice(0, 10);
    this.length = this.productsList.length;
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event) { //to adjust to screen size
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
        return res.title.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
      console.log(this.filterList);
      this.OnChange();
    }
    else if(this.name == ""){
     this.ngOnInit();
    }
  }


}
