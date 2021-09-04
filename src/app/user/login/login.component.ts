import { Component, OnInit, ResolvedReflectiveFactory, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../../account.service';
import { InMemoryDataService } from '../../in-memory-data.service';
import{ FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService,private memoryData: InMemoryDataService) { }

  ngOnInit() {
    
  }
  @Output() loginUser = new EventEmitter();

  public userName = [];
 
  profileForm = new FormGroup({
    UserEmail : new FormControl(''),
    UserPwd : new FormControl('')
  });

  onSubmit(){
    this.loginUser.emit(this.profileForm.value);
  }

 


}
