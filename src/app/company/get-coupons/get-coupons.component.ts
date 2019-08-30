import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';


@Component({
  selector: 'app-get-coupons',
  templateUrl: './get-coupons.component.html',
  styleUrls: ['./get-coupons.component.css']
})
export class GetCouponsComponent implements OnInit {
  public coupons:Coupon[];
  public coupon:Coupon;
  router:any;
  getCoupons:any;

  constructor(private activatedRoute:ActivatedRoute ,private companyService:CompanyServiceService) { }

  ngOnInit() {
    
    this.companyService.getCoupons().subscribe(coupons =>{
      this.coupons = coupons;
   },err =>{
     alert("Error:"+err.massage)
    });
  
    
  }
    removeCoupon(id){
      //const id = +this.activatedRoute.snapshot.params.companyId;
      const observable = this.companyService.removeCoupon(id);
      observable.subscribe(coup=>{
         this.coupon=coup;
      
        alert(JSON.stringify(this.removeCoupon));
        this.router.navigate(["/get-coupons"]);
      },response =>{
      console.log(id);
     
      });
     
    
  
    }

}
