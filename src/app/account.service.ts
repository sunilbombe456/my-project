import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



// if use only  root component use this part
// @Injectable({
//   providedIn: 'root'
// })




@Injectable()
export class AccountService {


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  userName ="";
  userPwd ="";

  getAccount()
  {
    return {
      name : "sunilbombe456@gmail.com",
      password : "sunil@123"
    }
  }

  signUpAccount(userAccount: any[])
  {
    console.log(userAccount);
    return this.http.post("http://localhost:3000/signUpAccount",userAccount,this.httpOptions);
  }

  signInAccount(userLogin: any[])
  {
    return this.http.post("http://localhost:3000/signInAccount",userLogin,this.httpOptions);
  }

  signInAdminAccount(adminAccount:any[]){
    return this.http.post("http://localhost:3000/signInAdminAccount",adminAccount,this.httpOptions);
  }

  signUpRest(rest :any[]){
    return this.http.post("http://localhost:3000/signUpRest", rest, this.httpOptions);
  }


  setAccount(userName,userPwd){
    this.userName = userName;
    this.userPwd = userPwd;
  }

}
