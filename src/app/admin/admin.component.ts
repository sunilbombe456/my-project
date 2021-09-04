import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private account: AccountService,private admin: AdminService) { }

  ngOnInit() {
  }

   admin_user=[];

  

  adminLogin(admin_data){
   this.account.signInAdminAccount(admin_data)
   .subscribe(
     (admin_user: any[]) => this.admin_user = admin_user
    );

   console.log(this.admin_user);

  }

  onLogout(){
    this.admin_user = null;
  }


}
