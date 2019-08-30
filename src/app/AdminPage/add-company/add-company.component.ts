
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MustMatch } from 'src/app/function/MustMatch';
import { NewCompany } from 'src/app/models/NewCompany';



@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  //The form of adding a new company will be initialized in the function
  public addCompanyForm: FormGroup;
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

  //After the constructor, the function will initialize addCompanyForm according to the set requirements.
  ngOnInit() {
    this.addCompanyForm = this.fromBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  //A function to be executed when submitting the document
  onSubmit() {
    this.message = "";
    this.submitted = true;
    //Checks whether the comapny name already exists. if is so stop the function.
    if (!this.addCompanyForm.controls['name'].invalid) {

        this.message = "The name " + this.addCompanyForm.controls['name'].value + " already exists. try other name";
        return;
      }
    
    //Checks whether the form is valid and does not stop the action.
    if (this.addCompanyForm.invalid) {
      return;
    } else {
        /**
         * If the name of the company does not exist.
         * We will create a new object from the values entered 
         * in form and send it to the addCustomer function
         */
        let newCompany: NewCompany = new NewCompany();
        newCompany.name = this.addCompanyForm.controls['name'].value;
        newCompany.email = this.addCompanyForm.controls['email'].value;
        newCompany.password = this.addCompanyForm.controls['password'].value;
        this.myService.addCompany(newCompany);
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.addCompanyForm.controls; }
}
