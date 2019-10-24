import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/services/IncomeService';
import { ItemsService } from 'src/app/services/item.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-income-by-customer-id',
  templateUrl: './income-by-customer-id.component.html',
  styleUrls: ['./income-by-customer-id.component.css']
})
export class IncomeByCustomerIdComponent implements OnInit {

  constructor(private incomeService: IncomeService, public itemService: ItemsService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public getAllIncomeByCustomerId(id:number) {
    this.incomeService.getAllIncomeByCustomerId(id).subscribe(res=>{
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL IncomeByCustomerId success! :) "); 
      this.itemService.incomes = JSON.parse(res.body); console.log(this.itemService.incomes); }
        else { console.log("GET-ALL IncomeByCustomerId faild! :( "); }
      if (this.itemService.incomes === null) { console.log("No IncomeByCustomerId ! "); alert("No IncomeByCustomerId ! "); this.itemService.incomes = []; }
       else { console.log("No IncomeByCustomerId ! "); alert("No IncomeByCustomerId ! "); }
    },
    error=>{
      let resError: HttpErrorResponse = error;
      if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET-ALL IncomeByCustomerId error :( "); }
    });

  }

}
