import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit() {
  }

  public createCompany(companyName, password, email) {
    this.adminservice.createCompany(companyName, password, email).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE company success! :) " + res.body); alert("CREATE company success! :)"); }
      else { console.log("CREATE company faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("CREATE company error :( "); alert("this company already exist!"); }
      });
    this.router.navigate(["/admin"]);
  }

}
