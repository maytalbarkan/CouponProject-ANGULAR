
import { LoginComponent } from './LoginPage/login/login.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { UpdateCompanyComponent } from './AdminPage/Company-admin/update-company/update-company.component';
import { AddCustomerComponent } from './AdminPage/Customer-admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './AdminPage/Customer-admin/update-customer/update-customer.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
// import { CustomerGuardService } from './services/customer-guard.service';
// import { CompanyGuardService } from './services/company-guard.service';
// import { AdminGuardService } from './services/admin-guard.service';
import { HomeComponent } from './home/home.component';


import { CustomerComponent } from './customer/customer.component';
// import { GetAllPurchasedCouponsComponent } from './customer/get-all-purchased-coupons/get-all-purchased-coupons.component';import { GetAllPurchasedCouponsByTypeComponent } from './customer/get-all-purchased-coupons-by-type/get-all-purchased-coupons-by-type.component';
import { GetCustomerComponent } from './AdminPage/Customer-admin/get-customer/get-customer.component';
import { CreateCompanyComponent } from './AdminPage/Company-admin/create-company/create-company.component';
import { RemoveCompanyComponent } from './AdminPage/Company-admin/remove-company/remove-company.component';
import { RemoveCustomerComponent } from './AdminPage/Customer-admin/remove-customer/remove-customer.component';
import { GetCompanyComponent } from './AdminPage/Company-admin/get-company/get-company.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [

  {path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "signup", component:SignupComponent},
 
  { path: "admin", component: AdminComponent},
  {path:"updateCompany", component:UpdateCompanyComponent},
   {path:"getCompany", component:GetCompanyComponent},
  {path:"create-company", component:CreateCompanyComponent},
  {path:"remove-company", component:RemoveCompanyComponent},
  {path:"updateCustomer", component:UpdateCustomerComponent},
  {path:"addCustomer", component:AddCustomerComponent},
  {path:"get-customer", component:GetCustomerComponent},
  {path:"remove-customer", component:RemoveCustomerComponent},

  { path: "customer", component: CustomerComponent},
//  { path: "customer", canActivate: [CustomerGuardService], component: CustomerComponent},
  // {path:"purchasedCouponsHistory",component:GetAllPurchasedCouponsComponent},

  { path: "company", component: CompanyComponent},
// { path: "company", canActivate: [CompanyGuardService], component: CompanyComponent},
  // {path:"createCoupon", component:CreateCouponComponent},
  // {path:"getCoupon", component:GetCouponComponent},
  // {path:"getCouponsByDate", component:GetCouponsByDateComponent},
  // {path:"getCouponsByPrice", component:GetCouponsByPriceComponent},
  // {path:"getCouponsByType", component:GetCouponsByTypeComponent},
  // {path:"removeCoupon", component:RemoveCouponComponent},
  // {path:"updateCoupon", component:UpdateCouponComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
