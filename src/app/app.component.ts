import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'couponProject';

  constructor(public loginService: LoginService, private router: Router) {

  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(["/home"]);
}


}
