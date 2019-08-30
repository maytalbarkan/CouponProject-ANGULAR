import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-get-all-purchased-coupons-by-type',
  templateUrl: './get-all-purchased-coupons-by-type.component.html',
  styleUrls: ['./get-all-purchased-coupons-by-type.component.css']
})
export class GetAllPurchasedCouponsByTypeComponent implements OnInit {
  coupons: Coupon[] = [];
  coupon: Coupon = new Coupon();
  typeToSort: couponType = null;
 

  constructor(private customerService:CustomerServiceService) { }

  ngOnInit() {
  }

  getAllPurchasedCouponsByType() {
   
    this.customerService.getAllPurchasedCouponByType(this.typeToSort).subscribe(
      (coupons) => {
        this.coupons = [];
        for (let coupon of coupons) {
          coupon = new Coupon(coupon);
          this.coupons.push(coupon);
        }
        
      },
      (error) => { console.log('something went wrong...') }
    );
  }
}
