import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('guard auth test URL: ' + state.url);
      if (this.tokenStorageService.getUser()) {
        return true;
      }
      //this.tokenStorageService.redirectAfterLogin = state.url;
      console.log("Nobody is logged!!");
      this.router.navigateByUrl('/login');
      return false;
  }
  
}
