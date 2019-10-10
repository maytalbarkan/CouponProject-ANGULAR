import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ItemsService } from 'src/app/services/item.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { constructor } from 'q';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  
  constructor(public adminService:AdminService, public itemService : ItemsService, private router : Router) { }

  private customer: any = {};

  ngOnInit() {
  }

  public getCustomer(customerID: number) {
    this.adminService.getCustomer(customerID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET customer success! :) "+res.body); this.itemService.customer = JSON.parse(res.body); console.log(this.itemService.customer); }
      else { console.log("get customer faild! :( "); }
    },
    error => {
      let resError: HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET customer error :( "); }
    });
  }


}


