import { HttpErrorResponse } from '@angular/common/http';

 /**
   * The function will receive an error received after an unsuccessful http request.
   * The function will check if the error occurred because the user is not logged in and will pass it to the LOGIN page otherwise the error will be printed to console.
   * @param err received after an unsuccessful http request. 
   */
  export function errorHandler(err: HttpErrorResponse) {
    let status = err.status;
    if(status==401){
      alert(err.error.message);
      //Move to login page.
    }else if(status==500 || status==0){
      alert("Sorry, we have a problem. Please contact your system administrator")
    }else{
      console.log("Status: "+status);
      console.log("Message: "+err.error.massages[0].status);
    }
  }