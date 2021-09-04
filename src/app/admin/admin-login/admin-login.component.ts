import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms' 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Output() adminUser = new EventEmitter();

  adminLoginForm = new FormGroup({
    ad_username: new FormControl(''),
    ad_pwd: new FormControl('')
  }); 

  onLogin(){
    this.adminUser.emit(this.adminLoginForm.value);
    console.log(this.adminLoginForm.value);
  }

}
