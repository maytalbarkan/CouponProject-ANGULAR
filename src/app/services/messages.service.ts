import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }


  private errorMessage = "";
  private errorFlag = false;

  private userNotAllowedPageMessage = "This user in not allowed to this page!";

  private notAllowedMessage = "This user in not allowed with this option or session timeout";
  private wentWrongMessage = "something went wrong please use support page to report";
  private missingInputMessage = "one or more info missing";
  private invalidInputMessage = "one or more inputs are invalid";

  private couponAddedMessage = "coupon added successfuly!";
  private couponExistsMessage = "coupon already exists";

  private purchaseSucceedMessage = "purchase succeed";
  private returnSucceedMessage = "return succeed";

  private noItemsExistsMessage = "no items exists for this search";

  private removeSucceedMessage = "remove succeed";
  private companyNotExistsMessage = "this company does not exists";
  private customerNotExistsMessage = "this customer does not exists";
  private couponNotExistsMessage = "this coupon does not exists";

  private signupSucceedMessage = "signup succeed";
  private companyExistsMessage = "company already exists";
  private customerExistsMessage = "customer already exists";

  private updateSucceedMessage = "update succeed";

  private noCompaniesMessage = "no companies";
  private noCustomersMessage = "no customers";
  private noCouponsMessage = "no coupons";
  private noPurchasedCouponsMessage = "no purchased coupons";


  // 
  public getErrorMessage() {
    return this.errorMessage;
  }
  public setErrorMessage(error: string) {
    this.errorMessage = error;
  }
  // 
  public getErrorFlag() {
    return this.errorFlag;
  }
  public setErrorFlag(flag: boolean) {
    this.errorFlag = flag;
  }
  // 

  public getUserNotAllowedPageMessage() {
    return this.userNotAllowedPageMessage;
  }


  public getNotAllowedMessage() {
    return this.notAllowedMessage;
  }
  public getWentWrongMessage() {
    return this.wentWrongMessage;
  }
  public getMissingInputMessage() {
    return this.missingInputMessage;
  }
  public getInvalidInputMessage() {
    return this.invalidInputMessage;
  }

  public getCouponAddedMessage() {
    return this.couponAddedMessage;
  }
  public getCouponExistsMessage() {
    return this.couponExistsMessage;
  }

  public getPurchaseSucceedMessage() {
    return this.purchaseSucceedMessage;
  }
  public getReturnSucceedMessage() {
    return this.returnSucceedMessage;
  }

  public getNoItemsExistsMessage() {
    return this.noItemsExistsMessage;
  }

  public getRemoveSucceedMessage() {
    return this.removeSucceedMessage;
  }
  public getCompanyNotExistsMessage() {
    return this.companyNotExistsMessage;
  }
  public getCustomerNotExistsMessage() {
    return this.customerNotExistsMessage;
  }
  public getCouponNotExistsMessage() {
    return this.couponNotExistsMessage;
  }

  public getSignupSucceedMessage() {
    return this.signupSucceedMessage;
  }
  public getCompanyExistsMessage() {
    return this.companyExistsMessage;
  }
  public getCustomerExistsMessage() {
    return this.customerExistsMessage;
  }

  public getUpdateSucceedMessage() {
    return this.updateSucceedMessage;
  }

  public getNoCompaniesMessage() {
    return this.noCompaniesMessage;
  }
  public getNoCustomersMessage() {
    return this.noCustomersMessage;
  }
  public getNoCouponsMessage() {
    return this.noCouponsMessage;
  }
  public getNoPurchasedCouponsMessage() {
    return this.noPurchasedCouponsMessage;
  }

}