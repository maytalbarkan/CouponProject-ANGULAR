
import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { ItemsService } from 'src/app/services/item.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 public company: Company[];
 
  constructor(public adminService:AdminService, public itemService: ItemsService, private router:Router) { }

  public ngOnInit() {}

  public getAllCompanies() {
    this.adminService.getAllCompanies().subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL companies success! :) "); 
      this.itemService.companies = JSON.parse(res.body); console.log(this.itemService.companies); }
      else { console.log("GET-ALL companies faild! :( "); console.log("RES ERROR: "+res.error); 
      console.log("HttpErrorResponse: "+res.HttpErrorResponse); }
      if (this.itemService.companies === null) { this.itemService.companies = []; console.log("No companies ! "); alert("No companies ! "); }
  
    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL companies error :( "); }
    });
  }

    public getAllCustomers() {
      this.adminService.getAllCustomer().subscribe(res => {
        if (res.status === ResponseCodes.OK) { console.log("GET-ALL customers success! :) "); 
        this.itemService.customers = JSON.parse(res.body); console.log(this.itemService.customers); }
        else { console.log("GET-ALL customers faild! :( "); console.log("RES ERROR: "+res.error); 
        console.log("HttpErrorResponse: "+res.HttpErrorResponse); }
        if (this.itemService.customers === null) { this.itemService.customers = []; console.log("No customers in the system ! "); alert("No customers ! "); }
    
      },
        error =>{
          let resError: HttpErrorResponse = error;
          if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
          this.router.navigate(["/login"]); }
          else { console.log("GET-ALL customers error :( "); }
      });



}}
