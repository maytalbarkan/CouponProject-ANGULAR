
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Router } from "@angular/router";

import { Observable } from 'rxjs';
import { UrlsServiceService } from './UrlsServiceService';
import { retry } from 'rxjs/operators';
import { LoginService } from './login.service';
import { ItemsService } from './item.service';

@Injectable({

  providedIn: 'root'

})

export class AdminService {

  //company
  private addcompany = "createCompany/";
  private removecompany = "deleteCompany/";
  private updatecompany = "updateCompany/";
  private getcompany = "getCompany/";
  private getallcompanies = "getAllCompnies/";


  //customer:
  private createcustomer = "createCustomer";
  private deletecustomer = "deleteCustomer";
  private updatecustomer = "updateCustomer";
  private getcustomer = "getCustomer";
  private getallcustomers = "getAllCustomers";
  
  private numberOfRetry = 1;

  constructor(
    private loginService: LoginService ,
    private http: HttpClient,
     private urlsService: UrlsServiceService,
     private connectionService: LoginService,
      private router: Router,
      private itemService: ItemsService,
      private adminService: AdminService) {
  
  }

// //COMPANY

public createCompany(companyName, Password, Email): Observable<HttpResponse<Object>> {
  let company = {
   companyName: companyName,
    password: Password, 
    email: Email
  };

  let url = this.urlsService.getAdminUrl() + this.addcompany + "/" + this.connectionService.token;

  return this.http.post(url, company, { observe: 'response' }).pipe(retry(this.numberOfRetry));
}

//get all company
public getAllCompanies(): Observable<any> {
  let url = this.urlsService.getAdminUrl() + this.getallcompanies + "/" + this.connectionService.token;
  return this.http.get(url, { observe: 'response', responseType: 'text' });
}

 //get company 
 public getCompany(id: number): Observable<any> {
  
  let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + id + "/" + this.connectionService.token;
  return this.http.get(url, { observe: 'response', responseType: 'text' });
}

   //update company works
   public updateCompany(id, password, email): Observable<any> {

    let url = this.urlsService.getAdminUrl() + this.updatecompany + "/" + this.connectionService.token
      + "/?id=" + id + "&password=" + password + "&email=" + email;
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

 //delete company works!
  public deletecompany(id: number): Observable<any> {

    let url = this.urlsService.getAdminUrl() + this.deletecompany + "/" + id + "/" + this.connectionService.token;
    return this.http.delete(url, { observe: 'response', responseType: 'text' });
  }



  ///customer:

  //get gustomer by id
 public getCustomer(id: number): Observable<any> {
  
  let url = this.urlsService.getAdminUrl() + this.getcustomer + "/" + id + "/" + this.connectionService.token;
  return this.http.get(url, { observe: 'response', responseType: 'text' });
}

//get all customer
public getAllCustomer(): Observable<any> {
  let url = this.urlsService.getAdminUrl() + this.getallcustomers + "/" + this.connectionService.token;
  return this.http.get(url, { observe: 'response', responseType: 'text' });
}

 //delete ustomer works!
 public deleteCustomer(id: number): Observable<any> {

  let url = this.urlsService.getAdminUrl() + this.deletecustomer + "/" + id + "/" + this.connectionService.token;
  return this.http.delete(url, { observe: 'response', responseType: 'text' });
}


  //update customer works
  public updateCustomer(id, password): Observable<any> {

    let url = this.urlsService.getAdminUrl() + this.updatecustomer + "/" + this.connectionService.token
      + "/?id=" + id + "&password=" + password;
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

   //create customer works!
   public createCustomer(CustomerName, Password): Observable<any> {
    let customer = {
      id: 0, customerName: CustomerName, password: Password, coupons: []
    };
    let url = this.urlsService.getAdminUrl() + this.createcustomer + "/" + this.connectionService.token;
    return this.http.post(url, customer, { observe: 'response', responseType: 'text' });
  }
}