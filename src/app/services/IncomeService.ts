import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlsServiceService } from './UrlsServiceService';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService,  private loginService: LoginService) { }

  // private getaLLincome = "allIncome";
  private getallincome = "viewAllIncome";
  private getallincomebycompanyid = "viewIncomeByCompanyId";
  private getallincomebycustomerid = "viewIncomeByCustomerId";

  //get all incomes works!
  public getAllIncomes(): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallincome + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //get all income by company id works!
  public getAllIncomeByCompanyId(id: number):Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallincomebycompanyid + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //get all income by customer id works!
  public getAllIncomeByCustomerId(id: number):Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallincomebycustomerid + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

}