import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public myService:AdminService, private router:Router) { }

  ngOnInit() {}
   
    public moveToCreateCompanyPage(){
      this.router.navigate(["/addCompany"])
    }
  
    /**
     * The function moves the client to add customer page.
     */
    public moveToCreateCustomerPage(){
      this.router.navigate(["/addCustomer"])
    }
  }


