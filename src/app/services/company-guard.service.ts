import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {

  constructor(private loginService : LoginService, private router: Router) { }

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  state: RouterStateSnapshot;

  public canActivate(r: ActivatedRouteSnapshot, s: RouterStateSnapshot): boolean {
    if (this.loginService.getCompanyUser() === true) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }

  }

}