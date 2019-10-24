import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { ItemsService } from 'src/app/services/item.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  constructor(public itemService: ItemsService,private customerService: CustomerService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public purchaseCoupon(id: number) {
    this.customerService.purchaseCoupon(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("PURCHASE coupon success! :) " + res.body); alert("PURCHASE coupon success! :)"); }
      else { console.log("PURCHASE coupon faild! :( "); }
    },
    error => {
      let resError: HttpErrorResponse = error;
      if (resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
      else { console.log("PURCHASE coupon error :( "); alert("error :("); console.log(resError.error); console.log(resError); }
    });
    this.router.navigate(["/customer"]);
  }

  public getAllCoupons() {
    this.customerService.getAllCoupons().subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL coupons success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL coupons faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }

    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL coupons error :( "); }
    });
  }



}
