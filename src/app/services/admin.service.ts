
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Company } from '../models/Company';
import { Router } from "@angular/router";
import { Customer } from '../models/Customer';

import { NewCompany } from '../models/NewCompany';
import { NewCustomer } from '../models/NewCustomer';
import { UpdateCompany } from '../models/UpdateCompany';
import { UpdateCustomer } from '../models/UpdateCustomer';
import { Log } from '../models/Log';
import { error } from '@angular/compiler/src/util';

@Injectable({

  providedIn: 'root'

})

export class AdminService {

  //The field will initialized when the admin will choose customer to make some action on him.

  //And will contain the customer on him will be action.

  public chosenCustomer: Customer = new Customer();

  //The field will initialized when the admin will choose company to make some action on him.

  //And will contain the company on him will be action.

  public chosenCompany: Company = new Company();

  //The field will contain list of all the customer in the DB.

  //The function getCustomers will initialized this field.

  public customerList: Customer[];

  //The field will contain list of all the copanies in the DB.

  //The function getCompanies will initialized this field.

  public companyList: Company[];

  // The field will contain list of all the logs in the Db.

  //The function getLogs will initialized this field.

  public listLogs: Log[];

  //The field will be initalizes in the constractor 

  //and contain the function errorHandlar from the loginService. 

  public errorHandler: Function;
  /**

   * The contractor runs the functions: getCompanies, getCustomer and homeSetting.
   * The functions that will trigger initializes the fields: companyList and customer list.
   * In addition there is an independent injection of HttClient, loginServer and Router.
   * @param myHttpClient - allowing us to make a request http.
   * @param router - allowing us to switch between routers in the project.
   * @param loginService -  by which we can edit fields in loginService.

   */

  constructor(private myHttpClient: HttpClient, private router: Router) {
    this.getCompanies();
    this.getCustomers();
  }



  /**

   * The function will sent http request from type GET.

   * The request will reach the server and try to get all the companies listed in the DB.

   * If the request succeeds, the field companyList will be initialized, otherwise the error will be forwarded to the errorHandler.

   */

  public getCompanies() {

    this.myHttpClient.get<Company[]>("http://localhost:8080/CouponProject/rest/admin/getallcompanies").subscribe(

      (res) => { this.companyList = res; },

      (err) => { this.errorHandler(err); }



    )

  }



  /** 

   * The function will sent http request from type GET.

   * The request will reach the server and try to get all the Customers listed in the DB.

   * If the request succeeds, the field customerList will be initialized, otherwise the error will be forwarded to the errorHandler.

  */

  public getCustomers() {

    this.myHttpClient.get<Customer[]>("http://localhost:8080/CouponProject/rest/admin/getallcustomers").subscribe(

      (res) => { this.customerList = res; },

      (err) => { this.errorHandler(err); }

    )

  }



  /**

   * The function will sent http request from type POST.

   * The request will reach to the server and try to create new company in the DB.

   * If the request is successful, the client will be notified and forwarded back to the home page, otherwise the error will be forwarded to the errorHandler.  

   * @param newCompany The company will be inserted into DB

   */

  public addCompany(newCompany: NewCompany) {

    this.myHttpClient.post<Company>("http://localhost:8080/CouponProject/rest/admin/createCompany", newCompany).subscribe(

      (res) => {

        alert("Company successfully added");

        this.moveToHomePage();

      },

      (err) => { this.errorHandler(err); }

    )

  }



  /**

  * The function will sent http request from type POST.

  * The request will reach to the server and try to create new customer in the DB.

  * If the request is successful, the client will be notified and forwarded back to the home page, otherwise the error will be forwarded to the errorHandler.

   * @param newCustomer The customer will be inserted into DB

   */

  public addCustomer(newCustomer: NewCustomer) {

    this.myHttpClient.post<any>("http://localhost:8080/CouponProject/rest/admin/createCustomer", newCustomer).subscribe(

      (res) => {

        alert("Customer successfully added");

        this.moveToHomePage();

      },

      (err) => { this.errorHandler(err) }

    )

  }



  /**

   * The function will send a PUT request.

   * The request will arrive at the server and attempt to update the details of an existing DB company according to the company that was received as an argument.

   * If the request is successful, the client will be notified and forwarded to the home page, otherwise the error will be forwarded to the error handler.

   * @param updateCompany company with his updated information.

   */

  public updateCompany(updateCompany: UpdateCompany) {

    this.myHttpClient.put<string>("http://localhost:8080/CouponProject/rest/admin/updateCompany?compId=963852&password=fff1&email=Ffff@Fedrik.com" + updateCompany.id, updateCompany).subscribe(

      (res) => {

        alert("Company successfully updated.");

        this.moveToHomePage();

      },

      (err) => { this.errorHandler(err); }

    )

  }



  /**

   * The function will send a PUT request.

   * The request will arrive at the server and attempt to update the details of an existing DB customer according to the customer that was received as an argument.

   * If the request is successful, the client will be notified and forwarded to the home page, otherwise the error will be forwarded to the error handler. 

   * @param updateCustomer customer with his updated information.

   */

  public updateCustomer(updateCustomer: UpdateCustomer) {

    this.myHttpClient.put<Customer>("http://localhost:8080/CouponProject/rest/admin/updateCustomer?customerId=5&password=kkk888" + updateCustomer.id, updateCustomer).subscribe(

      (res) => {

        alert("Customer successfully updated.");

        this.moveToHomePage();

      },

      (err) => { this.errorHandler(err); }

    )

  }



  /**

   * The function sends a DELETE request.

   * The request will arrive at the server and attempt to remove the company whose ID was accepted as an argument from the DB.

   * If the request is successful, the user will be notified and the getCompanies function will be restarted.

   * @param id of the company we want to delete.

   */

  public removeCompany(id: number) {

    this.myHttpClient.delete("http://localhost:8080/CouponProject/rest/admin/removeCompany/" + id).subscribe(

      (res) => {

        alert("Company successfully removed.");

        this.getCompanies();

      },

      (err) => { this.errorHandler(err) }

    )

  }



  /**

   * The function sends a DELETE request.

   * The request will arrive at the server and attempt to remove the customer whose ID was accepted as an argument from the DB.

   * If the request is successful, the user will be notified and the getCustomers function will be restarted.

   * @param id of the customer we want to delete.

   */

  public removeCustomer(id: number) {

    this.myHttpClient.delete("http://localhost:8080/CouponProject/rest/admin/removeCustomer/" + id).subscribe(

      (res) => {

        alert("Customer successfully removed.");

        this.getCustomers();

      },

      (err) => { this.errorHandler(err); }

    )

  }



  /**

   * The function will sent http request from type GET.

   * The request will reach the server and try to get all the logs listed in the DB.

   * If the request succeeds, the field listLogs will be initialized, otherwise the error will be forwarded to the errorHandler.

   */

  public getLogs() {

    this.myHttpClient.get<Log[]>("http://localhost:8080/couponProject/admin/log").subscribe(

      (res) => { this.listLogs = res },

      (err) => { this.errorHandler(err) }

    )

  }



  /**

   * The function sends a DELETE request.

   * The request will arrive at the server and attempt to remove the log whose ID was accepted as an argument from the DB.

   * If the request is successful, the user will be notified and the getLogs function will be restarted.

   * @param id of the log we want to delete.

   */

  public removeLog(id: number) {

    this.myHttpClient.delete("http://localhost:8080/couponProject/admin/log/" + id).subscribe(

      (res) => { this.getLogs(); },

      (err) => { this.errorHandler(err); }

    )

  }



  /**

   * The function will sent http request from type GET.

   * The request will arrive at the server and attempt to remove the logs that the date of them between the dates that accepted as an argument from the DB.

   * If the request succeeds, the field listLogs will be initialized, otherwise the error will be forwarded to the errorHandler.

   * @param startDate The date the search begins.

   * @param endDate The date the search ends.

   */

  public getLogBetweenDates(startDate: string, endDate: string) {

    this.myHttpClient.get<Log[]>("http://localhost:8080/couponProject/admin/log/byDates?startDate=" + startDate + "&endDate=" + endDate).subscribe(

      (res) => (this.listLogs = res),

      (err) => (this.errorHandler(err))

    )

  }



  /**

   * The function receives a string type and checks for a companyList if the same name is received.

   * If there is a company with the same name the function will return true. Another false.

   * @param name The name the function will check

   */

  // public checkIfCompanyNameExists(name: string): boolean {

  //   let res: boolean = false;

  //   this.companyList.forEach(

  //     Company => {

  //       if (Company.name == name) {

  //         res = true;

  //       }

  //     })

  //   return res;

  // }



  /**

   * The function receives a string type and checks for a customerList if the same name is received.

   * If there is a customer with the same name the function will return true. Another false.

   * @param name The name the function will check

   */

  public checkIfCustomerNameExists(name: string) {

    let res: boolean = false;

    this.customerList.forEach(

      Customer => {

        if (Customer.name == name) {

          res = true;

        }

      })

    return res;

  }



  /**

   * The function will be activated whenever the user selects a company to perform an action on it.

   * The function will find the company according to the given ID as an argument and implement it in the chosenCompany field.

   * @param id The company id that same function will place in the chosenCompany.

   */

  // public setChosenCompany(id: number) {

  //   this.companyList.forEach(Comp => {

  //     if (id == Comp.id) {

  //       this.chosenCompany = Comp;

  //     }

  //   });

  // }



  /**

   * The function will be activated whenever the user selects a customer to perform an action on it.

   * The function will find the company according to the given ID as an argument and implement it in the chosenCompany field.

   * @param id The customer id that same function will place in the chosenCustomer.

   */

  public setChosenCustomer(id: number) {

    this.customerList.forEach(customer => {

      if (customer.id == id) {

        this.chosenCustomer = customer;

      }

    });

  }







  /**

   * The function will activate the getCompanies and getCustomers functions and move the client to the home page.

   */

  public moveToHomePage() {

    this.getCompanies();

    this.getCustomers();

    this.router.navigate(["/admin"]);

  }

}