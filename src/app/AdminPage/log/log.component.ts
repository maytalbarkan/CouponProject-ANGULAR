import { Component, OnInit } from '@angular/core';
import { displayDate } from 'src/app/function/DisplayDate';
import { displayHour } from 'src/app/function/DisplayHour';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  //The field will be initialized when the client uses the function getLogsBetweenDates.
  public startDate:string = null;
  //The field will be initialized when the client uses the function getLogsBetweenDates.
  public endDate:string = null;
  //The field will be initialized when the client caused an error in function  getLogsBetweenDates.
  public dateMessage:string = "";
  public displayDate:Function = displayDate;
  public displayHour:Function = displayHour;
    
  

  /**
   * The constructor of the class independent injection of AdminService.
   * @param myService allows us to use in the function of adminService.
   */
  constructor(public myService:AdminService) { }

  ngOnInit() {}

  /**
   * The function will trigger when the client click to finf logs between dates.
   */
  public getLogsBetweenDates(){
    if((this.validationDate(this.startDate))&&(this.validationDate(this.endDate))){
      this.myService.getLogBetweenDates(this.submitDate(this.startDate),this.submitDate(this.endDate));
    }
  }


  /**
   * Help function that check if the value of the date not null.
   * @param endDate 
   */
  private validationDate(date: string):boolean {
    if(date == null){
      this.dateMessage = "The date can not be empty.";
      return false;
    }else{
      return true;

    }
  }
  
  /**
   * Help function that make the value of the date valid for the http requset.
   * @param date must be string.
   */
  private submitDate(date:string):string{
    let d:Date = new Date(date);
    let day = d.getDate();
    let month =d.getMonth();
    let year = d.getFullYear();
    return year+"/"+month+"/"+day;
  }

 



  /**
   * The function recevied id and trigger the function removeLog from AdminService.
   * @param id must be number.
   */
  public removeLog(id:number){
    this.myService.removeLog(id);
  }

 

}
