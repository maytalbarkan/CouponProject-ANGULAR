import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CompanyService } from 'src/app/services/company.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private companyService: CompanyService) { }

  ngOnInit() {
  }

  public createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type) {
    this.companyService.createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE coupon success! :) " + res.body); alert("CREATE coupon success! :)"); }
      else { console.log("CREATE coupon faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("CREATE coupon error :( "); alert("error :("); console.log(resError.error); console.log(resError); }
      });
    this.router.navigate(["/company"]);
  }
}