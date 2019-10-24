import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CompanyService } from 'src/app/services/company.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {


  constructor(private router: Router, private loginService: LoginService, private companyService: CompanyService) { }

  ngOnInit() {
  }

  public updateCoupon(id, endDate, price){
    this.companyService.updateCoupon(id, endDate, price).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ console.log("UPDATE coupon success! :) "+res.body); alert("UPDATE coupon success! :) "); }
        else { console.log("UPDATE coupon faild! :( "); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
    else { console.log("UPDATE coupon error :( "); console.log(error); }
    });
    this.router.navigate(["/company"]);
  }


}
