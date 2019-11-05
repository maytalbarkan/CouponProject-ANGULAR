import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { UpdateCompanyComponent } from './AdminPage/Company-admin/update-company/update-company.component';
import { AddCustomerComponent } from './signup/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './AdminPage/Customer-admin/update-customer/update-customer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './LoginPage/login/login.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './CompanyPage/company.component';
import { CustomerComponent } from './CustomerPage/customer.component';
import { GetCompanyComponent } from './AdminPage/Company-admin/get-company/get-company.component';
import { HttpRequestInterceptor } from './HttpRequestInterceptor';
import { CreateCompanyComponent } from './signup/create-company/create-company.component';
import { RemoveCompanyComponent } from './AdminPage/Company-admin/remove-company/remove-company.component';
import { GetCustomerComponent } from './AdminPage/Customer-admin/get-customer/get-customer.component';
import { RemoveCustomerComponent } from './AdminPage/Customer-admin/remove-customer/remove-customer.component';
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



@NgModule({
  declarations: [
    
    AppComponent,  
    GetCompanyComponent,
    UpdateCompanyComponent,
    AdminComponent,
    UpdateCompanyComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    CompanyComponent,
    CustomerComponent,
   

    // GetAllPurchasedCouponsComponent,
    SignupComponent,
    LoginComponent,
    LoginComponent,
    HomeComponent,
    CreateCompanyComponent,
    RemoveCompanyComponent,
    GetCustomerComponent,
    RemoveCustomerComponent,
    CreateCouponComponent,
    DeleteCouponComponent,
    UpdateCouponComponent,
    GetAllCompanyCouponsComponent,
    CompenydetailsComponent,
    GetCouponByPriceComponent,
    GetCouponByTypeComponent,
    PurchaseCouponComponent,
    HistoryPageComponent,
    GetAllPurchaseComponent,
    IncomeByCompanyIdComponent,
    IncomeByCustomerIdComponent,
    CompanyIncomeComponent, 
  ],

  
  imports: [BrowserModule, AppRoutingModule,  HttpClientModule, FormsModule],
 
  providers: [
    // AdminServiceService
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
     bootstrap: [AppComponent]
})
export class AppModule { }
