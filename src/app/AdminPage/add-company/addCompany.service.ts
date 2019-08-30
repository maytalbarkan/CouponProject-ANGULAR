
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http'
import{Observable, throwError, observable} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AddCompanyService {
   
    private _sessionId: string; 
    // private _companyURL = 'http://localhost:8080/CouponProject/rest/admin/createCompany'; //json
    private _baseURL = 'http://localhost:8080/CouponProject/rest/admin/createCompany'; 
    

    constructor(private http:HttpClient, private cookieService: CookieService){
        this._sessionId = cookieService.get("sessionId");   
    }
    

   
    addCompany(name,pass,email):Observable<any> 
    { 

        let headers = new Headers({
            'Content-Type': 'application/json'
          });

        let params = new HttpParams({
            fromObject: {
                name: name,
                pass: pass,
                email : email,
            }
          });


        return this.http.get<any>(this._baseURL,{params}).pipe(  
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error to create company, please try agian")
                }
            )
        )
    }
 
   
    }


