import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';

export class AutenticadorGuard implements CanActivate {

  constructor(
    private router: Router,
    private state: AppState) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.state.token && this.state.token.length > 5) {
      return true;
    } 

    this.router.navigate(['/login']);
    return false;
  }
}
