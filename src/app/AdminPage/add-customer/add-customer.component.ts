import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MustMatch } from 'src/app/function/MustMatch';
import { NewCustomer } from 'src/app/models/NewCustomer';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  //The form of adding a new customer will be initialized in the function ngOnInit.
  public addCustomerForm: FormGroup;
  //Describes whether a "Submit" button has been pressed
  public submitted: boolean = false;
  //If the company name already exists in DB, the message will be formatted accordingly.
  public message: string = "";

  /**
  * The custructor independent injection the adminService.
  * @param myService the adminService.
  * @param fromBuilder Will allow us to use reactive forms
  */
  constructor(public myService: AdminService, private fromBuilder: FormBuilder) { }

  ///After the constructor, the function will initialize addCustomerForm according to the set requirements.
  ngOnInit() {
    this.addCustomerForm = this.fromBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  //A function to be executed when submitting the document
  onSubmit() {
    this.message = "";
    this.submitted = true;
    //Checks whether the customer name already exists. if is so stop the function.
    if (this.addCustomerForm.controls['name'].valid) {
      if (this.myService.checkIfCustomerNameExists(this.addCustomerForm.controls['name'].value)) {
        this.message = "The name " + this.addCustomerForm.controls['name'].value + " already exists. try other name";
        return;
      }
    }
    //Checks whether the form is valid and does not stop the action.
    if (this.addCustomerForm.invalid) {
      return;
    } else {
      /**
       * We will create a new object from the values entered 
       * in form and send it to the addCompany function
       */
      let newCustomer: NewCustomer = new NewCustomer();
      newCustomer.name = this.addCustomerForm.controls['name'].value;
      newCustomer.password = this.addCustomerForm.controls['password'].value;
      this.myService.addCustomer(newCustomer);
    }
  }

  get f() {
    return this.addCustomerForm.controls;
  }
}
