
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { UrlsServiceService } from '../services/UrlsServiceService';
import { ItemsService } from '../services/item.service';

@Injectable({

  providedIn: 'root'

})

export class SignupService {

  //company
  private addcompany = "createCompany/";
  //customer:
  private createcustomer = "createCustomer";
  
  private numberOfRetry = 1;

  constructor(
   
    private http: HttpClient,
     private urlsService: UrlsServiceService,
      private itemService: ItemsService,)
 { }

// //COMPANY

public createCompany(companyName, Password, Email): Observable<HttpResponse<Object>> {
  let company = {
   companyName: companyName,
    password: Password, 
    email: Email
  };

  let url = this.urlsService.getSignupUrl() + this.addcompany;

  return this.http.post(url, company, { observe: 'response' }).pipe(retry(this.numberOfRetry));
}

  ///customer:
   //create customer works!
   public createCustomer(CustomerName, Password): Observable<any> {
    let customer = {
      id: 0, customerName: CustomerName, password: Password, coupons: []
    };
    let url = this.urlsService.getSignupUrl() + this.createcustomer;
    return this.http.post(url, customer, { observe: 'response', responseType: 'text' });
  }
}