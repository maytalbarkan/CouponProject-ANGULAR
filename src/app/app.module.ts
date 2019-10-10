import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { UpdateCompanyComponent } from './AdminPage/Company-admin/update-company/update-company.component';
import { AddCustomerComponent } from './AdminPage/Customer-admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './AdminPage/Customer-admin/update-customer/update-customer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './LoginPage/login/login.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { GetCompanyComponent } from './AdminPage/Company-admin/get-company/get-company.component';
import { HttpRequestInterceptor } from './HttpRequestInterceptor';
import { CreateCompanyComponent } from './AdminPage/Company-admin/create-company/create-company.component';
import { RemoveCompanyComponent } from './AdminPage/Company-admin/remove-company/remove-company.component';
import { GetCustomerComponent } from './AdminPage/Customer-admin/get-customer/get-customer.component';
import { RemoveCustomerComponent } from './AdminPage/Customer-admin/remove-customer/remove-customer.component';
import { CreateCouponComponent } from './company/create-coupon/create-coupon.component';
import { DeleteCouponComponent } from './company/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './company/update-coupon/update-coupon.component';



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
  ],

  
  imports: [BrowserModule, AppRoutingModule,  HttpClientModule, FormsModule],
 
  providers: [
    // AdminServiceService
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
     bootstrap: [AppComponent]
})
export class AppModule { }
