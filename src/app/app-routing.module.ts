
import { LoginComponent } from './LoginPage/login/login.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { UpdateCompanyComponent } from './AdminPage/Company-admin/update-company/update-company.component';
import { AddCustomerComponent } from './signup/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './AdminPage/Customer-admin/update-customer/update-customer.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
// import { CustomerGuardService } from './services/customer-guard.service';
// import { CompanyGuardService } from './services/company-guard.service';
// import { AdminGuardService } from './services/admin-guard.service';
import { HomeComponent } from './home/home.component';


import { CustomerComponent } from './CustomerPage/customer.component';
// import { GetAllPurchasedCouponsComponent } from './customer/get-all-purchased-coupons/get-all-purchased-coupons.component';import { GetAllPurchasedCouponsByTypeComponent } from './customer/get-all-purchased-coupons-by-type/get-all-purchased-coupons-by-type.component';
import { GetCustomerComponent } from './AdminPage/Customer-admin/get-customer/get-customer.component';
import { CreateCompanyComponent } from './signup/create-company/create-company.component';
import { RemoveCompanyComponent } from './AdminPage/Company-admin/remove-company/remove-company.component';
import { RemoveCustomerComponent } from './AdminPage/Customer-admin/remove-customer/remove-customer.component';
import { GetCompanyComponent } from './AdminPage/Company-admin/get-company/get-company.component';
import { CompanyComponent } from './CompanyPage/company.component';
import { CreateCouponComponent } from './CompanyPage/create-coupon/create-coupon.component';
import { DeleteCouponComponent } from './CompanyPage/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './CompanyPage/update-coupon/update-coupon.component';
import { GetAllCompanyCouponsComponent } from './CompanyPage/get-all-company-coupons/get-all-company-coupons.component';
import { CompenydetailsComponent } from './CompanyPage/compenydetails/compenydetails.component';
import { GetCouponByPriceComponent } from './CustomerPage/get-coupon-by-price/get-coupon-by-price.component';
import { GetCouponByTypeComponent } from './CustomerPage/get-coupon-by-type/get-coupon-by-type.component';
import { PurchaseCouponComponent } from './CustomerPage/purchase-coupon/purchase-coupon.component';
import { HistoryPageComponent } from './CustomerPage/history-page/history-page.component';
import { GetAllPurchaseComponent } from './CustomerPage/get-all-purchase/get-all-purchase.component';
import { IncomeByCompanyIdComponent } from './AdminPage/Income/income-by-company-id/income-by-company-id.component';
import { IncomeByCustomerIdComponent } from './AdminPage/Income/income-by-customer-id/income-by-customer-id.component';
import { CompanyIncomeComponent } from './CompanyPage/company-income/company-income.component';
import { AdminGuardService } from './services/admin-guard.service';
import { CustomerGuardService } from './services/customer-guard.service';
import { CompanyGuardService } from './services/company-guard.service';


const routes: Routes = [

  {path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "signup", component:SignupComponent},
 
  { path: "admin", canActivate: [AdminGuardService], component: AdminComponent },
  { path: "customer", canActivate: [CustomerGuardService], component: CustomerComponent },
  { path: "company", canActivate: [CompanyGuardService], component: CompanyComponent },
 

  //ADMIN
  {path:"updateCompany", component:UpdateCompanyComponent},
   {path:"getCompany", component:GetCompanyComponent},
  {path:"create-company", component:CreateCompanyComponent},
  {path:"remove-company", component:RemoveCompanyComponent},
  {path:"updateCustomer", component:UpdateCustomerComponent},
  {path:"addCustomer", component:AddCustomerComponent},
  {path:"get-customer", component:GetCustomerComponent},
  {path:"remove-customer", component:RemoveCustomerComponent},
  {path:"incomeCompanyId", component:IncomeByCompanyIdComponent},
  {path:"incomeCustomerd", component:IncomeByCustomerIdComponent},


//CUSTOMER
  { path: "purchaseCoupon", component: PurchaseCouponComponent},
  {path:"historyPage",component:HistoryPageComponent},
  {path:"couponPrice",component:GetCouponByPriceComponent},
  {path:"couponType",component:GetCouponByTypeComponent},
  {path:"allPurchase",component:GetAllPurchaseComponent},

 //COMPANY
{path:"compenydetails", component:CompenydetailsComponent},
{path:"createCoupon", component:CreateCouponComponent},
 {path:"removeCoupon", component:DeleteCouponComponent},
 {path:"updateCoupon", component:UpdateCouponComponent},
 {path:"getallCompanyCoupon", component:GetAllCompanyCouponsComponent},
 {path:"incomeCompany", component:CompanyIncomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }