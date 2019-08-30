import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Coupon } from 'src/app/models/coupon';


@Component({
  selector: 'app-get-coupons-by-date',
  templateUrl: './get-coupons-by-date.component.html',
  styleUrls: ['./get-coupons-by-date.component.css']
})
export class GetCouponsByDateComponent implements OnInit {
  company: Company;
  coupons: Coupon[] = [];
  coupon: Coupon = new Coupon();
  couponToUpdate = new Coupon();
  dateToSort: Date = null;
  
 

  constructor(private companyService:CompanyServiceService) { }

  ngOnInit() {
  }

  getCouponsByDate() {
    
    this.companyService.getCouponsByDate(this.dateToSort).subscribe(
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
