import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SnackbarService } from './services/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router,private snackbarService:SnackbarService) { }
  
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true
    } else {       
      this._router.navigate(['/login'])
      this.snackbarService.warning("Please Login!!!",'Warning')
      return false
    }
  }
  
}
