// import { Component, OnInit } from '@angular/core';
// import { Coupon } from 'src/app/models/coupon';
// import { CustomerServiceService } from 'src/app/services/customer-service.service';


// @Component({
//   selector: 'app-get-all-purchased-coupons',
//   templateUrl: './get-all-purchased-coupons.component.html',
//   styleUrls: ['./get-all-purchased-coupons.component.css']
// })
// export class GetAllPurchasedCouponsComponent implements OnInit {
//   coupons: Coupon[] = [];
//   coupon: Coupon = new Coupon();
//   showOption: string = 'table';
//   priceToSort: number = null;
//   typeToSort: couponType = null;
//   loadingCoupons: boolean = true;
  

//   constructor(private customerService:CustomerServiceService) { }

//   ngOnInit() {
//     this.getAllPurchasedCoupons();
//   }
//   setCoupon(coupon: Coupon) {
//     var self = this;
//     self.coupon = new Coupon(coupon);
//   }

//   changeShow(optionSelected: string) {
//     var self = this;
//     self.showOption = optionSelected;
//   }

//   getAllPurchasedCoupons() {
//     this.loadingCoupons = true;
//     this.coupons = [];
//     this.customerService.getAllPurchasedCoupon().subscribe(
//       (coupons) => {
//         for (let coupon of coupons) {
//           coupon = new Coupon(coupon);
//           this.coupons.push(coupon);
//         }
//         this.loadingCoupons = false
//       },
//       (error) => { console.log('something went wrong...') }
//     );

//   }
//   getAllPurchasedCouponsByType() {
//     // var self = this;
//     this.loadingCoupons = true;
//     self.customerService.getAllPurchasedCouponByType(this.typeToSort).subscribe(
//       (coupons) => {
//         this.coupons = [];
//         for (let coupon of coupons) {
//           coupon = new Coupon(coupon);
//           this.coupons.push(coupon);
//         }
//         this.loadingCoupons = false
//       },
//       (error) => { console.log('something went wrong...') }
//     );
//   }

//   getAllPurchasedCouponsByPrice() {
//     // var self = this;
//     this.loadingCoupons = true;
//     self.customerService.getAllPurchasedCouponByPrice(this.priceToSort).subscribe(
//       (coupons) => {
//         this.coupons = [];
//         for (let coupon of coupons) {
//           coupon = new Coupon(coupon);
//           this.coupons.push(coupon);
//         }
//         this.loadingCoupons = false
//       },
//       (error) => { console.log('something went wrong...') }
//     );
//   }
// }


