import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Company } from 'src/app/models/Company';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-get-coupons-by-type',
  templateUrl: './get-coupons-by-type.component.html',
  styleUrls: ['./get-coupons-by-type.component.css']
})
export class GetCouponsByTypeComponent implements OnInit {
  
  typeToSort: couponType = null;
  coupons: Coupon[] = [];
  coupon: Coupon = new Coupon();
  company: Company;

  constructor(private companyService:CompanyServiceService) { }

  ngOnInit() {
  }

  getCouponsByType() {
   
    this.companyService.getCouponsByType(this.typeToSort).subscribe(
      
      (coupons) => {
        this.coupons = [];
        for (let coupon of coupons) {
          coupon = new Coupon(coupon);
          this.coupons.push(coupon);
        }
        
      },
      (error) => { console.error('something went wrong...') }
    );
  }

}
