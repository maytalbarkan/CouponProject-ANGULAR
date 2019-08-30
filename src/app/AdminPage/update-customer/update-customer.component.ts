
import { AdminService } from '../../services/admin.service';
import { OnInit, Component } from '@angular/core';
import { CustomMessage } from 'src/app/models/CustomMessage';
import { ValidationPassword } from 'src/app/function/ValidationPassword';
import { UpdateCustomer } from 'src/app/models/UpdateCustomer';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {


  /**
   * The fields are initialized in the chosen customer fields,
   *  which are automatically initialized by the customer just before reaching this componnet.
   */
  public id: number = this.myService.chosenCustomer.id;
  public name: string = this.myService.chosenCustomer.name;
  public password: string = this.myService.chosenCustomer.password;
  //The fields will contain an error message that will be displayed to the user if he entered an invalid value
  public passwordMessage:CustomMessage = new CustomMessage("");

  //When creating the Compunet instance, there will be an adminService self-injection through which all functions will be executed.
  constructor(public myService: AdminService) { }

  ngOnInit() { }

  /*
  A function that verifies that the fields are valid creates an object of type UpdateCustomer
  and triggers the updateCustomer function when it sends the object as an argument.
  */
  public editCustomer() {
    if (ValidationPassword(this.password, this.passwordMessage)) {
      this.myService.updateCustomer(new UpdateCustomer(this.id, this.name, this.password));
    }
  }
}
