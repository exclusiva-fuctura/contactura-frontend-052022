import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.state";
@Injectable()
export class FucturaGuard implements CanActivate {

    constructor(
        private state: AppState
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (this.state.usuario && 
            this.state.usuario.email.indexOf('fuctura.com.br') > 0){
                return true;
        }

        return false;
    }
}