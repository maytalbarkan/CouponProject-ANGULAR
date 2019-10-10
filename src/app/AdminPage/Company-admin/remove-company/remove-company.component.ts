import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  
    constructor(public adminService:AdminService, private router: Router, loginService: LoginService) { }

    ngOnInit() {
    }
  
    public deleteCompany(companyID: number) {
      this.adminService.deletecompany(companyID).subscribe(res => {
        if (res.status === ResponseCodes.OK) { console.log("DELETE company success! :) " + res.body); alert("DELETE company success! :) "); }
        else { console.log("DELETE company faild! :( "); }
      },
        error => {
          let resError: HttpErrorResponse = error;
          if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
          this.router.navigate(["/login"]); }
          else { console.log("DELETE company error :( "); }
        });
        this.router.navigate(["/admin"]);
    }
  
    // private logout(){
    //   this.loginService.logout();
    //   this.router.navigate(["/login"]);
    // }
  
  }

