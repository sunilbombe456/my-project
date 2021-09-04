import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../admin.service';
import { AccountService } from '../../account.service';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor( private admin: AdminService, private account: AccountService ) { }

  ngOnInit() {
  }

  @Input() adminData: Object;

  
  public isActiveDiv = "profile";

  onChange(menu){
    this.isActiveDiv = menu;
  }

  createRest(restData){
    restData.admin = this.adminData;
    this.admin.signUpRest(restData).subscribe((res) => console.log(res));
  }

}
