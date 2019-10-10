import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  public updateCompany(id, password, email){
    this.adminService.updateCompany(id, password, email).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ console.log("UPDATE company success! :) "+res.body); alert("UPDATE company success! :) "); }
        else { console.log("UPDATE company faild! :( "); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
    else { console.log("UPDATE company error :( "); console.log(error); }
    });
    this.router.navigate(["/admin"]);
  }

}