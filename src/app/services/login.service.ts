import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/login-result';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public isLoggedIn: boolean;
    public type: string;

    public constructor(private httpClient: HttpClient) { }

    // The server must return one of the following jsons: 
    // { "isLoggedIn": true, "type": "customer" }
    // { "isLoggedIn": true, "type": "company" }
    // { "isLoggedIn": true, "type": "admin" }
    // { "isLoggedIn": false, "type": "" }

    public isExist(credentials: Credentials): Observable<LoginResult> {

        // Real Server: 
         return this.httpClient.post<LoginResult>("http://localhost:8080/CouponProject/login.html", credentials, {withCredentials: true});

        // Demo Server: 
    //     return this.httpClient.get<LoginResult>("/assets/json/server-demo.json");
     }

    public isExistDemo(credentials: Credentials): boolean {

        if (credentials.type === "customer" && credentials.username === "1" && credentials.password === "1") {
            this.isLoggedIn = true;
            this.type = credentials.type;
            return true;
        }

        if (credentials.type === "company" && credentials.username === "2" && credentials.password === "2") {
            this.isLoggedIn = true;
            this.type = credentials.type;
            return true;
        }

        if (credentials.type === "admin" && credentials.username === "3" && credentials.password === "3") {
            this.isLoggedIn = true;
            this.type = credentials.type;
            return true;
        }

        return false;
    }

    public logout(): void {
        this.type = "";
        this.isLoggedIn = false;
    }
}
