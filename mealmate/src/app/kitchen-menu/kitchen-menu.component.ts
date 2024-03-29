import { Component, OnInit } from '@angular/core';
import {KitchentoolsService} from '../services/kitchentools.service';
import { PageEvent } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen-menu',
  templateUrl: './kitchen-menu.component.html',
  styleUrls: ['./kitchen-menu.component.css']
})
export class KitchenMenuComponent implements OnInit {

  name:String;
  productsList=[];
  filterList=[];
  pagedList;
  breakpoint: number = 3;  
  length: number = 0;
  pageSize: number = 10;  
  pageSizeOptions: number[] = [5,10];

  constructor(private kitchentoolService:KitchentoolsService,private _router: Router) {
    
  }

  ngOnInit(): void {
    this.kitchentoolService.getKitchenTools().subscribe((data:any[])=>{
      this.productsList=data;
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.pagedList = this.productsList.slice(0, 10);
      this.length = this.productsList.length;
    },
    err => {
      if( err instanceof HttpErrorResponse ) {
        if (err.status === 401) {
          this._router.navigate(['/login'])
        }
      }
    })
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
