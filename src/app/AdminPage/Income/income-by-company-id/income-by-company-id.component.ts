import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { IncomeService } from 'src/app/services/IncomeService';
import { ItemsService } from 'src/app/services/item.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-income-by-company-id',
  templateUrl: './income-by-company-id.component.html',
  styleUrls: ['./income-by-company-id.component.css']
})
export class IncomeByCompanyIdComponent implements OnInit {

  constructor(private incomeService: IncomeService, public itemService: ItemsService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public getAllIncomeByCompanyId(id:number) {
    this.incomeService.getAllIncomeByCompanyId(id).subscribe(res=>{
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL IncomeByCompanyId success! :) "); 
      this.itemService.incomes = JSON.parse(res.body); console.log(this.itemService.incomes); }
        else { console.log("GET-ALL IncomeByCompanyId faild! :( "); }
      if (this.itemService.incomes === null) { console.log("No IncomeByCompanyId ! "); alert("No IncomeByCompanyId ! "); this.itemService.incomes = []; }
       else { console.log("No IncomeByCompanyId ! "); alert("No IncomeByCompanyId ! "); }
    },
    error=>{
      let resError: HttpErrorResponse = error;
      if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET-ALL IncomeByCompanyId error :( "); }
    });

  }


}
