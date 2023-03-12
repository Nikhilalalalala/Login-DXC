import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  backendUrl = 'http://localhost:8080';
  loginPath = "/user";



  constructor(private http: HttpClient) { }

   getLoginResponse(username:string,  password:string) {
    return this.http.post(this.backendUrl + this.loginPath, {
      "username":username,
      "password":password
    }, {headers: new HttpHeaders().append('Access-Control-Allow-Origin' , '*') })
  } 
}
