import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdminService {
  
  constructor(private http: HttpClient) { 

  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private admin_id;

  setAdmin(admin){
    this.admin_id = admin;
  }

  getAdmin(){
    return this.admin_id;
  }

  signUpRest(rest :any[]){
    return this.http.post("http://localhost:3000/signUpRest", rest, this.httpOptions);
  }
  




}