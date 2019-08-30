import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Company } from 'src/app/models/Company';


@Component({
  selector: 'app-get-coupons-by-price',
  templateUrl: './get-coupons-by-price.component.html',
  styleUrls: ['./get-coupons-by-price.component.css']
})
export class GetCouponsByPriceComponent implements OnInit {
  priceToSort: number=null;
  coupons: Coupon[] = [];
  coupon: Coupon = new Coupon();
  company: Company;
  constructor(private companyService:CompanyServiceService) { }

  ngOnInit() {
    
  //   this.companyService.getCoupons().subscribe(coupons =>{
  //     this.coupons = coupons;
  //  },err =>{
  //    alert("Error:"+err.massage)
  //   });
  }
  

  getCouponsByPrice() {
    
    this.companyService.getCouponsByPrice(this.priceToSort).subscribe(
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
 