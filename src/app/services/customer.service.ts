import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlsServiceService } from './UrlsServiceService';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
  
    constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginService) { }

    public purchasecoupon = "purchaseCoupon";
    private getcouponsbycoupontype = "getCustomerByCouponType";
    private getallcustomercoupons = "getAllCustomerCoupons";
    private getcouponsbyprice = "getCustomerByPrice";
    private getallcoupons = "getAllCoupons";
       
    //purchase coupon 
     public purchaseCoupon(id:number): Observable<any> {
      let url = this.urlsService.getCustomerUrl() + this.purchasecoupon + "/" + id + "/" + this.loginService.token;
      return this.http.post(url, null, { observe: 'response', responseType: 'text' });
    }
  

  //get all coupons works! 
  public getAllCoupons(): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getallcoupons ;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //get all customer coupons works!
  public getAllCustomerCoupons(id:number): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getallcustomercoupons + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe:'response', responseType:'text' });
  }

  //get coupons by coupon type works!
  public getCouponsByCouponType(couponType): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getcouponsbycoupontype + "/" + couponType + "/" + this.loginService.token;
    return this.http.get(url, { observe:'response', responseType:'text' });
  }

  //get coupons by price works!
  public getCouponsByPrice(price: number): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getcouponsbyprice + "/" + price + "/" + this.loginService.token;
    return this.http.get(url, { observe:'response', responseType:'text' });
  }

    //get coupons by coupon type for company works!
    public getCouponsByCouponTypeForCompany(couponType): Observable<any> {
      let url = this.urlsService.getCompanyUrl() + this.getcouponsbycoupontype + "/" + couponType + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }
  
   
}