import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/ResponseCodesEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupService } from '../signup-service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private signupervice: SignupService, private router: Router) { }

  ngOnInit() {
  }

  public createCustomer(customerName, password) {
    this.signupervice.createCustomer(customerName, password).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE customer success! :) "+res.body); alert("CREATE customer success! :)"); }
      else { console.log("CREATE customer faild! :( "); }
    },
    );
    this.router.navigate(["/home"]);
  }
}
