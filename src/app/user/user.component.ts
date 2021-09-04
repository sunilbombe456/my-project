import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public login = true;
  public isActiveDiv = "profile";
  public isLogin = false;

  public user = [];
//start
constructor(private accountService: AccountService,private memoryData: InMemoryDataService) { }

ngOnInit() {

}

onSignIn(){
  this.login = true;
}
onSignUp(){
  this.login = false;
}
onSignOut(){
  this.isLogin = false;
}

createUser(userData){
  this.accountService.signUpAccount(userData)
    .subscribe((user: any[]) => this.user = user);
    this.isLogin = true;
    console.log(this.user);
}
loginUser(userData){
  this.accountService.signInAccount(userData)
    .subscribe((user: any[]) => this.user = user);
    this.isLogin = true;
    console.log(this.user);
}

onChange(menu){
  this.isActiveDiv = menu;
}

onLogin(){
  this.isLogin = true;
}


}
