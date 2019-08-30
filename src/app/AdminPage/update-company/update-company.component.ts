
import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { CustomMessage } from 'src/app/models/CustomMessage';




@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  /**
   * The fields are initialized in the chosen company fields,
   *  which are automatically initialized by the customer just before reaching this componnet.
   */
  // public id: number = this.myService.chosenCompany.id;
  // public name: string = this.myService.chosenCompany.name;
  public password: string = this.myService.chosenCompany.password;
  public email: string = this.myService.chosenCompany.email;
  //The fields will contain an error message that will be displayed to the user if he entered an invalid value
  public emailMessage: CustomMessage = new CustomMessage("");
  public passwordMessage:CustomMessage = new CustomMessage("");

  //When creating the Compunet instance, there will be an adminService self-injection through which all functions will be executed.
  constructor(public myService: AdminService) { }

  ngOnInit() { }

  /*
  A function that verifies that the fields are valid creates an object of type UpdateCompany
  and triggers the updateCompany function when it sends the object as an argument.
  */
  // public editCompany() {
  //   this.emailMessage.message = "";
  //   this.passwordMessage.message = "";
  //   if (ValidationPassword(this.password, this.passwordMessage) && (validationEmail(this.email, this.myService.companyList, this.id, this.emailMessage))) {
  //     this.myService.updateCompany(new UpdateCompany(this.id, this.name, this.password, this.email));
  //   }
  // }




}
