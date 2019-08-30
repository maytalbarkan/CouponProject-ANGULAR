
import { LoginComponent } from './LoginPage/login/login.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { AddCompanyComponent } from './AdminPage/add-company/add-company.component';
import { UpdateCompanyComponent } from './AdminPage/update-company/update-company.component';
import { AddCustomerComponent } from './AdminPage/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './AdminPage/update-customer/update-customer.component';
import { LogComponent } from './AdminPage/log/log.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CustomerGuardService } from './services/customer-guard.service';
import { CompanyGuardService } from './services/company-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CreateCouponComponent } from './company/create-coupon/create-coupon.component';
import { GetCouponComponent } from './company/get-coupon/get-coupon.component';
import { GetCouponsComponent } from './company/get-coupons/get-coupons.component';
import { GetCouponsByDateComponent } from './company/get-coupons-by-date/get-coupons-by-date.component';
import { GetCouponsByPriceComponent } from './company/get-coupons-by-price/get-coupons-by-price.component';
import { GetCouponsByTypeComponent } from './company/get-coupons-by-type/get-coupons-by-type.component';
import { RemoveCouponComponent } from './company/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './company/update-coupon/update-coupon.component';
import { CustomerComponent } from './customer/customer.component';
import { PurchaseCouponComponent } from './customer/purchase-coupon/purchase-coupon.component';
// import { GetAllPurchasedCouponsComponent } from './customer/get-all-purchased-coupons/get-all-purchased-coupons.component';
import { GetAllPurchasedCouponsByPriceComponent } from './customer/get-all-purchased-coupons-by-price/get-all-purchased-coupons-by-price.component';
import { GetAllPurchasedCouponsByTypeComponent } from './customer/get-all-purchased-coupons-by-type/get-all-purchased-coupons-by-type.component';


const routes: Routes = [

  {path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "signup", component:SignupComponent},

  { path: "admin", canActivate: [AdminGuardService], component: AdminComponent},
  {path:"addCompany", component:AddCompanyComponent},
  {path:"updateCompany", component:UpdateCompanyComponent},
  {path:"addCustomer", component:AddCustomerComponent},
  {path:"updateCustomer", component:UpdateCustomerComponent},
  {path:"log", component:LogComponent},


 { path: "customer", canActivate: [CustomerGuardService], component: CustomerComponent},
  {path:"purchase-coupon/:couponId",component:PurchaseCouponComponent},
  // {path:"purchasedCouponsHistory",component:GetAllPurchasedCouponsComponent},
  {path:"purchasedCouponsByType",component:GetAllPurchasedCouponsByTypeComponent},
  {path:"purchasedCouponsByPrice",component:GetAllPurchasedCouponsByPriceComponent},
  {path:"purchase-coupon",component:PurchaseCouponComponent},

  { path: "company", canActivate: [CompanyGuardService], component: CompanyComponent},
  {path:"createCoupon", component:CreateCouponComponent},
  {path:"getCoupon", component:GetCouponComponent},
  {path:"getCouponsByDate", component:GetCouponsByDateComponent},
  {path:"getCouponsByPrice", component:GetCouponsByPriceComponent},
  {path:"getCouponsByType", component:GetCouponsByTypeComponent},
  {path:"removeCoupon", component:RemoveCouponComponent},
  {path:"updateCoupon", component:UpdateCouponComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
