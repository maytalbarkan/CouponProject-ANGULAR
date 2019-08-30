import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Coupon } from 'src/app/models/coupon';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public coupons:Coupon[]=[];
  public coupon:Coupon=new Coupon();
  router:any;
  getCoupons:any;

  constructor(private activatedRoute:ActivatedRoute ,private companyService:CompanyServiceService,private customerService:CustomerServiceService) { }

  ngOnInit() {
    this.companyService.getCoupons().subscribe(coupons =>{
      this.coupons = coupons;
   },err =>{
     alert("Error:"+err.massage)
    });
  }

  // PurchaseCoupon(id) {

    // this.customerService.PurchaseCoupon(this.coupon).subscribe(
    //   (success) => {
    //    alert("success to purchase coupon!!!")
    //   },
    //   (error) => {
    //     alert("purchase coupon failed!!")
    //   }
    // );
  //   const observable = this.customerService.PurchaseCoupon(id);
  // observable.subscribe(coup=>{
  //   this.coupon = coup;
  
  //   alert(JSON.stringify(this.PurchaseCoupon));
  //   this.router.navigate(["/get-all-purchased-coupons"]);
  // },response =>{
  // console.log(id);
 
  // });
  
  // }

}
