import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerServiceService } from 'src/app/services/customer-service.service';


@Component({
  selector: 'app-get-all-purchased-coupons-by-price',
  templateUrl: './get-all-purchased-coupons-by-price.component.html',
  styleUrls: ['./get-all-purchased-coupons-by-price.component.css']
})
export class GetAllPurchasedCouponsByPriceComponent implements OnInit {
  coupons: Coupon[] = [];
  coupon: Coupon = new Coupon();
  
  priceToSort: number = null;

 


  constructor(private customerService:CustomerServiceService) { }

  ngOnInit() {
    
  }

  getAllPurchasedCouponsByPrice(){
 
    this.customerService.getAllPurchasedCouponsByPrice(this.priceToSort).subscribe(
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
 





