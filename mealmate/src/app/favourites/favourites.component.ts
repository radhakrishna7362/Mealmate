import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FavoriteService } from '../services/favorite.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  length;
  displayedColumns=['name','view','actions'];
  favourites
  constructor(private favouriteService:FavoriteService,private authService:AuthService,private snackBarService:SnackbarService) { }

  ngOnInit(): void {
    this.authService.getUserId().subscribe((res)=>{
      this.favouriteService.getFav(res).subscribe((resp)=>{
        this.favourites=resp;
        this.length=this.favourites.length;
        console.log(resp)
      })
    })
  }

  delete(_id){
    this.favouriteService.deleteFav(_id)
    .subscribe((res)=>{
      
    },err=>{
      if( err instanceof HttpErrorResponse ) {
        if (err.status === 200) {
          this.snackBarService.success('Removed Successfully from Favoruites!!!','Success');
        }
        this.ngOnInit();
      }
    })
  }

}
