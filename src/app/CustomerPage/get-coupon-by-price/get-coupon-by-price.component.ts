import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/item.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-coupon-by-price',
  templateUrl: './get-coupon-by-price.component.html',
  styleUrls: ['./get-coupon-by-price.component.css']
})
export class GetCouponByPriceComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private customerService: CustomerService, public itemService: ItemsService) { }

  ngOnInit() {
  }

  public getCouponsByPrice(price: number){
    this.customerService.getCouponsByPrice(price).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL CouponsByPrice success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL CouponsByPrice faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }
    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL CouponsByPrice error :( "); }
    });
  }


}
