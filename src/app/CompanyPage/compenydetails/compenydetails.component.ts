import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ItemsService } from 'src/app/services/item.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-compenydetails',
  templateUrl: './compenydetails.component.html',
  styleUrls: ['./compenydetails.component.css']
})
export class CompenydetailsComponent implements OnInit {
  
  constructor(private companyService: CompanyService, private router: Router, private loginService: LoginService, public itemService: ItemsService) { }

  ngOnInit() {
  }

  public getCompany(id: number) {
    this.companyService.getCompany(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET company success! :) "+res.body); this.itemService.company = JSON.parse(res.body); console.log(this.itemService.company); }
      else { console.log("GET company faild! :( "); }
    },
    error => {
      let resError: HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET company error :( "); }
    });
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}