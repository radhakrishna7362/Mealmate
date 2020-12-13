import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { FavoriteService } from '../services/favorite.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private _router: Router,private snackbarService:SnackbarService,private favouriteService:FavoriteService,private cartService:CartService) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          acceptTerms: [false, Validators.requiredTrue],
          acceptTerms2: [false, Validators.requiredTrue]
      });
  }

  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.form.invalid) {
          return;
      }
      this.auth.getUserId().subscribe((res)=> {
        this.cartService.deleteCart(res).subscribe((res)=>{

        },
        err=>{
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 200) {
            }
          }
        })
        this.favouriteService.deleteFavs(res).subscribe((res)=>{

        },
        err=>{
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 200) {
            }
          }
        })
        this.auth.deleteaccount(res).subscribe(()=>{
          
        },
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this.snackbarService.error("Unexpected Error",'Error');
              this.onReset();
            }
            if (err.status === 200) {
              localStorage.removeItem('token')
              this.snackbarService.success('Your account has been deleted successfully\nYou No longer able to access to your Deleted Account.','Success');
              this._router.navigate(['/home'])
            }
          }
        }
      )
      })
    }

  onReset() {
      this.submitted = false;
      this.form.reset();
  }

}
