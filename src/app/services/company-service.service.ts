import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';



@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http:HttpClient) { }

  public getCoupons():Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/company/getCoupons",{withCredentials:true});
    // .map((res) => res.json());

     }
     removeCoupon(couponId: number):Observable<Coupon>{
      return this.http.delete<Coupon>("http://localhost:8082/webCoupon1/rest/company/removeCoupon/"+couponId);
     }
     createCoupon(coupon: Coupon):Observable<Coupon>{
      return this.http.post<Coupon>("http://localhost:8082/webCoupon1/rest/company/createCoupon",coupon,{withCredentials:true});
  }
  getCoupon(couponId: number):Observable<Coupon>{
    return this.http.get<Coupon>("http://localhost:8082/webCoupon1/rest/company/getCoupon/"+ couponId );
   }

   
   
   updateCoupon(coupon: Coupon):Observable<Coupon> {
        
    return this.http.post<Coupon>("http://localhost:8082/webCoupon1/rest/company/updateCoupon/", coupon,{withCredentials:true});
     
  }

  getCouponsByPrice(price: number){ 
   
    return  this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/company/getCouponsByMaxCouponPrice/"+price);
      
  }
  getCouponsByDate(date: Date){ 
   
    return  this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/company/getCouponsByMaxCouponDate/"+date);
      
  }
  getCouponsByType(couponType: couponType){ 
   
    return  this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/company/getAllCouponsByType/"+couponType);
      
  }
  }

