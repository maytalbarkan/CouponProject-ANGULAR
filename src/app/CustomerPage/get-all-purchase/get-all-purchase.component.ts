import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ItemsService } from 'src/app/services/item.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-all-purchase',
  templateUrl: './get-all-purchase.component.html',
  styleUrls: ['./get-all-purchase.component.css']
})
export class GetAllPurchaseComponent implements OnInit {

 
  constructor(private customerService: CustomerService, public itemService: ItemsService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public getAllCustomerCoupons(id:number){
    this.customerService.getAllCustomerCoupons(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL Customer-Coupons success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL Customer-Coupons faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }
    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL Customer-Coupons error :( "); }
    });
  }
}
