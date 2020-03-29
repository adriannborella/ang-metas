import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const isloged = await this.auth.isLoged();
    console.log('Loged Guard', isloged);
      
    if (isloged) {
      this.router.navigateByUrl('/goals');
      return false;
    } else {
      return true;
    }
  }
}
