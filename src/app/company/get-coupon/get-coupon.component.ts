import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';


@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {
  public coupon :Coupon;
  

  constructor(private activatedRoute:ActivatedRoute,private companyService:CompanyServiceService) { }

 public  ngOnInit():void {
  const id = +this.activatedRoute.snapshot.params.couponId;
  //id = 3;couponId
  
  const observable = this.companyService.getCoupon(id);
  
  observable.subscribe(coup=>{
  this.coupon = coup ;
  //console.log(this.coupon);
  //alert(JSON.stringify(coup));
  });
  }
  updateCoupon():void{
    const observable =this.companyService.updateCoupon(this.coupon);
    observable.subscribe(updateCoupon=>{
      //alert(JSON.stringify(this.updateCompany));
      //this.router.navigate(["/home"]);
    },response =>{
    console.log(response);
    
   
    });

  }

}
