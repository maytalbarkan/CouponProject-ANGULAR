import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';


@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
  companyService: any;
  public coupon :Coupon;
  router: any;

  constructor() { }

  ngOnInit() {
  }
  updateCoupn(id){
    const observable =this.companyService.updateCoupn(id);
    observable.subscribe(comp=>{
      this.coupon = comp;
      //alert(JSON.stringify(this.updateCompany));
    this.router.navigate(["/home"]);
  },() =>{
  console.log(id);
});

}

}
