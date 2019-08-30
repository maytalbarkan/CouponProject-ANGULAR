
import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /**
   * Class constructor, independent injection of AdminService and Router.
   * @param myService Allows us to communicate with a server.
   * @param router Allow us to move between components.
   */
  constructor(public myService:AdminService, private router:Router) { }

  ngOnInit() {}

  /**
   * The function moves the client to add company page.
   */
  public moveToCreateCompanyPage(){
    this.router.navigate(["/addCompany"])
  }

  /**
   * The function moves the client to add customer page.
   */
  public moveToCreateCustomerPage(){
    this.router.navigate(["/addCustomer"])
  }

  /**
   * The function passes the received ID to the setChosenCompany function in the adminService.
   * @param id must be number.
   */
  // public moveToUpdateCompanyPage(id:number){
  //   this.myService.setChosenCompany(id);
  //   this.router.navigate(["/updateCompany"])
  // }

  /**
   * The function passes the received ID to the setChosenCustomer function in the adminService.
   * @param id must be number.
   */
  public moveToUpdateCustomerPage(id:number){
    this.myService.setChosenCustomer(id);
    this.router.navigate(["/updateCustomer"])
  }

  /**
   * The function triggers the getLogs function from the admin service and moves to the log page.
   */
  public moveToLogPage(){
    this.myService.getLogs();
    this.router.navigate(["/log"])
  }

  /**
   * The function triggers the function setChosenCompany from AdminService with the id that received, 
   * A question pops up to the client whether he is sure that he wants to delete the object and if he
   * replies to the object object is deleted. Otherwise the function stops.
   * @param id must be number.
   */
  // public removeCompany(id:number){
  //   this.myService.setChosenCompany(id);
  //   if(this.myService.chosenCompany.id == id){
  //   let result:boolean = confirm("Are you sure you want to delete "+this.myService.chosenCompany.name+" ?");
  //   if(result){
  //   this.myService.removeCompany(id);
  //     } 
  //   }
  // }

   /**
   * The function triggers the function setChosenCustomer from AdminService with the id that received, 
   * A question pops up to the client whether he is sure that he wants to delete the object and if he
   * replies to the object object is deleted. Otherwise the function stops.
   * @param id must be number.
   */
  public removeCustomer(id:number){
    this.myService.setChosenCustomer(id);
    if(this.myService.chosenCustomer.id == id){
    let result:boolean = confirm("Are you sure you want to delet "+this.myService.chosenCustomer.name+" ?");
    if(result){
    this.myService.removeCustomer(id);
      } 
    }
  }
}
