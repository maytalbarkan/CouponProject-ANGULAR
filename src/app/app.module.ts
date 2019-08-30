import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { AddCompanyComponent } from './AdminPage/add-company/add-company.component';
import { UpdateCompanyComponent } from './AdminPage/update-company/update-company.component';
import { AddCustomerComponent } from './AdminPage/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './AdminPage/update-customer/update-customer.component';
import { LogComponent } from './AdminPage/log/log.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './LoginPage/login/login.component';
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
import { GetAllPurchasedCouponsByPriceComponent } from './customer/get-all-purchased-coupons-by-price/get-all-purchased-coupons-by-price.component';
// import { GetAllPurchasedCouponsComponent } from './customer/get-all-purchased-coupons/get-all-purchased-coupons.component';
import { CustomerComponent } from './customer/customer.component';
import { GetAllPurchasedCouponsByTypeComponent } from './customer/get-all-purchased-coupons-by-type/get-all-purchased-coupons-by-type.component';
import { PurchaseCouponComponent } from './customer/purchase-coupon/purchase-coupon.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    CompanyComponent,
    CreateCouponComponent,
    GetCouponComponent,
    GetCouponsComponent,
    GetCouponsByDateComponent,
    GetCouponsByPriceComponent,
    GetCouponsByTypeComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    LogComponent,
    CustomerComponent,
    GetAllPurchasedCouponsByPriceComponent,
    GetAllPurchasedCouponsByTypeComponent,
    // GetAllPurchasedCouponsComponent,
    PurchaseCouponComponent,
    SignupComponent,
    LoginComponent,
    LoginComponent,
    HomeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
     bootstrap: [AppComponent]
})
export class AppModule { }
