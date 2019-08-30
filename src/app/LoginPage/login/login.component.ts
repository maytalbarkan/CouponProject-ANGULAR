

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credentials = new Credentials();

  public constructor(private loginService: LoginService, private router: Router) { }

  // Real Server: 
  public login(): void {
      this.loginService.isExist(this.credentials).subscribe(loginResult => {
          if (!loginResult.isLoggedIn) {
              alert("Incorrect username or password!");
          }
          else {
              this.loginService.isLoggedIn = true;
              this.loginService.type = loginResult.type;
              if (loginResult.type === "customer") {
                  this.router.navigate(["/customer"]);
              }
              else if (loginResult.type === "company") {
                  this.router.navigate(["/company"]);
              }
              else if (loginResult.type === "admin") {
                  this.router.navigate(["/admin"]);
              }
          }
      });
  }

  // Demo Server
  public loginDemo(): void {
      if (this.loginService.isExistDemo(this.credentials)) {
          if (this.credentials.type === "customer") {
              this.router.navigate(["/customer"]);
          }
          else if (this.credentials.type === "company") {
              this.router.navigate(["/company"]);
          }
          else if (this.credentials.type === "admin") {
              this.router.navigate(["/admin"]);
          }
      }
      else {
          alert("Incorrect username or password!");
      }
  }

}
