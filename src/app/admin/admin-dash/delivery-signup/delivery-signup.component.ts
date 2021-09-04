import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-delivery-signup',
  templateUrl: './delivery-signup.component.html',
  styleUrls: ['./delivery-signup.component.css']
})
export class DeliverySignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  deliverySignup = new FormGroup({
    d_name: new FormControl(''),
    d_phone: new FormControl(''),
    d_city: new FormControl(''),
    d_pwd: new FormControl('')
  }); 

  public deliveryBoy =[
    { d_name: "rahul narhe",
      d_phone: "7675656445",
      d_city: "pune",
      d_pwd: "rahul"}
  ];

  public deliveryForm = false;

  onSignUp(){
    this.deliveryBoy.push(this.deliverySignup.value);
    console.log(this.deliverySignup.value);
    this.deliveryForm =false;
  }

  onDelete(){
    this.deliveryBoy.pop();
  }

  onRegister(){
    this.deliveryForm = true;
  }

  onRemove(){
    this.deliveryForm = false;
  }

}
