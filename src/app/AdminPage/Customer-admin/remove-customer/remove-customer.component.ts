import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  
  constructor(public adminService:AdminService, private router: Router, loginService: LoginService) { }

  ngOnInit() {
  }

  public deleteCustomer(customerID: number) {
    this.adminService.deleteCustomer(customerID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("DELETE customer success! :) " + res.body); alert("DELETE customer success! :) "); }
      else { console.log("DELETE customer faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("DELETE customer error :( "); }
      });
      this.router.navigate(["/admin"]);
  }

  // private logout(){
  //   this.loginService.logout();
  //   this.router.navigate(["/login"]);
  // }

}



