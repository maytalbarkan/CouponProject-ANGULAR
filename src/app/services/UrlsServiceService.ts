import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsServiceService {

  constructor() { }

  private adminMenuUrl = "http://localhost:8080/admin/";
  private signupUrl="http://localhost:8080/signUp/"
  private companyMenuUrl = "http://localhost:8080/company/";
  private customerMenuUrl = "http://localhost:8080/customer/";
  private loginUrl = "http://localhost:8080/loginService/login";
  private logoutUrl = "http://localhost:8080/loginService/login";
  private allCouponsUrl = "http://localhost:8080/";


  public getAdminUrl() {
    return this.adminMenuUrl;
  }

  public getSignupUrl() {
    return this.signupUrl;
  }


  public getCompanyUrl() {
    return this.companyMenuUrl;
  }
  public getCustomerUrl() {
    return this.customerMenuUrl;
  }
  public getLoginUrl() {
    return this.loginUrl;
  }

  public getLogoutUrl(){
    return this.logoutUrl;
  }

  public getAllCouponsUrl(){
    return this.allCouponsUrl;
  }

}