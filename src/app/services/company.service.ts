import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlsServiceService } from './UrlsServiceService';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CompanyService {
  
    constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginService) { }
    private getcompany= "getCompany";
    private createcoupon = "insertCoupon";
    private deletecoupon = "deleteCoupon";
    private updatecoupon = "updateCoupon";
    private getallcompanycoupons = "getAllCompanyCoupons";

    // private getcoupon = "getCoupon";
    private getallcoupons = "getAllCoupons";

    private getcouponsbycoupontype = "getCouponsByCouponType";
    private getallcustomercoupons = "getAllCustomerCoupons";
    private getcouponsbyprice = "getCouponsByPrice";
  
  
   // company details
    public getCompany(id: number): Observable<any> {
  
      let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + id + "/" + this.loginService.token;
      return this.http.get(url, { observe: 'response', responseType: 'text' });
    }

    //create coupon - good
    public createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type): Observable<any> {
      let startDate = new Date(StartDate).getTime();
      let endDate = new Date(EndDate).getTime();
  
      let coupon = {
        id: 0, title: Title, startDate: startDate,
        endDate: endDate, amount: Amount,
        message: Message, price: Price,
        image: Image, type: Type
      };
      let url = this.urlsService.getCompanyUrl() + this.createcoupon + "/" + this.loginService.token;
      return this.http.post(url, coupon, { observe: 'response', responseType: 'text' });
    }
  
    //delete coupon 
    public deleteCoupon(id: number): Observable<any> {
      let url = this.urlsService.getCompanyUrl() + this.deletecoupon + "/" + id + "/" + this.loginService.token;
      return this.http.delete(url, { observe: 'response', responseType: 'text' });
    }
  
    //update coupon
    public updateCoupon(id, EndDate, price): Observable<any> {
      let endDate = new Date(EndDate).getTime();
      let url = this.urlsService.getCompanyUrl() + this.updatecoupon + "/" + this.loginService.token
      + "/?id=" + id + "&endDate=" + EndDate + "&price=" + price;
      return this.http.post(url, null, { observe: 'response', responseType: 'text' });
    }
  
    //get all coupons 
    public getAllCoupons(): Observable<any> {
      let url = this.urlsService.getAdminUrl() + this.getallcoupons + "/" + this.loginService.token;
      return this.http.get(url, { observe: 'response', responseType: 'text' });
    }
  
  
  
    //get all customer coupons 
    public getAllCustomerCoupons(id:number): Observable<any> {
      let url = this.urlsService.getCustomerUrl() + this.getallcustomercoupons + "/" + id + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }
  
    //get coupons by coupon type 
    public getCouponsByCouponType(couponType): Observable<any> {
      let url = this.urlsService.getCustomerUrl() + this.getcouponsbycoupontype + "/" + couponType + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }
  
    //get coupons by price 
    public getCouponsByPrice(price: number): Observable<any> {
      let url = this.urlsService.getCustomerUrl() + this.getcouponsbyprice + "/" + price + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }
  
      //get coupons by coupon type for company 
      public getCouponsByCouponTypeForCompany(couponType): Observable<any> {
        let url = this.urlsService.getCompanyUrl() + this.getcouponsbycoupontype + "/" + couponType + "/" + this.loginService.token;
        return this.http.get(url, { observe:'response', responseType:'text' });
      }
    
      //get coupons by price for company 
      public getCouponsByPriceForCompany(price: number): Observable<any> {
        let url = this.urlsService.getCompanyUrl() + this.getcouponsbyprice + "/" + price + "/" + this.loginService.token;
        return this.http.get(url, { observe:'response', responseType:'text' });
      }
  
      //get all company coupons works!
      public getAllCompanyCoupons(id:number): Observable<any> {
        let url = this.urlsService.getCompanyUrl() + this.getallcompanycoupons + "/" + id + "/" + this.loginService.token;
        return this.http.get(url, { observe:'response', responseType:'text' });
      }
  }