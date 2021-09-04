import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InMemoryDataService {

  constructor(private http :HttpClient ) { }


  getService()
  {
    return this.http.get("http://localhost:3737/data");
  }

  setService(userData: any[])
  {
    return this.http.post("http://localhost/API/user.php",userData);
  }

  getRestaurant()
  {
    return this.http.get("http://localhost:3737/restaurant");
  }

  getRestDetails()
  {
    return this.http.get("http://localhost:3737/restDetails");
  }

  getRestDashBoard(rest_id: String){
    return this.http.get("http://localhost:3737/restDashBoard/"+rest_id);
  }

  getRestDish(rest_id: String){
    return this.http.get("http://localhost:3737/restDish/"+rest_id);
  }
}
