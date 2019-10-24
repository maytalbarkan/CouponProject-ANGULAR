import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

 
  constructor(public companyService:CompanyService, private router: Router, loginService: LoginService) { }

  ngOnInit() {
  }

  public deleteCoupon(couponID: number) {
    this.companyService.deleteCoupon(couponID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("DELETE coupon success! :) " + res.body); alert("DELETE coupon success! :) "); }
      else { console.log("DELETE coupon faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("DELETE company error :( "); }
      });
      this.router.navigate(["/admin"]);
  }


}
