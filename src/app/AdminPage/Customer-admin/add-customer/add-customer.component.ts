import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit() {
  }

  public createCustomer(customerName, password) {
    this.adminservice.createCustomer(customerName, password).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE customer success! :) "+res.body); alert("CREATE customer success! :)"); }
      else { console.log("CREATE customer faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.status === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("CREATE customer error :( "); console.log(error); }
      });
    this.router.navigate(["/admin"]);
  }
}
