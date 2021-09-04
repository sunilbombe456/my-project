import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{  AccountService } from "../../account.service";
import{ FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private account:  AccountService ) { }

  @Output() registerUser = new EventEmitter();

  ngOnInit() {
  }

   profileForm = new FormGroup({
    UserName : new FormControl(''),
    UserEmail : new FormControl(''),
    UserMobile : new FormControl(''),
    UserAddr : new FormControl(''),
    UserPwd : new FormControl('')
    
  });

  onSubmit(){

    this.account.signUpAccount(this.profileForm.value)
    .subscribe(res => console.log(res));
    console.log(this.profileForm.value);

    this.registerUser.emit(this.profileForm.value);
  }

}
