import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../../../account.service';

@Component({
  selector: 'app-rest-signup',
  templateUrl: './rest-signup.component.html',
  styleUrls: ['./rest-signup.component.css']
})
export class RestSignupComponent implements OnInit {

  constructor(private account: AccountService) { }

  ngOnInit() {
  }

  @Output() RestData = new EventEmitter();

  public restForm = false;

  public restInfo =[];

  RestaurantData = new FormGroup({
    rest_name: new FormControl(''),
    rest_email: new FormControl(''),
    rest_phone: new FormControl(''),
    rest_city: new FormControl(''),
    rest_pwd: new FormControl('')
  }); 


  removeRest(){
    this.restForm=false;
  }

  registerRest(){
    this.restForm= true;
  }
   createRest(){
    this.RestData.emit(this.RestaurantData.value);
    this.restForm = false;
   }

}
