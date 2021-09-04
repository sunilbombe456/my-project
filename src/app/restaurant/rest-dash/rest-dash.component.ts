import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-dash',
  templateUrl: './rest-dash.component.html',
  styleUrls: ['./rest-dash.component.css']
})
export class RestDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public isActiveDiv = "profile";

  public menuForm = true;

  onChange(menu){
    this.isActiveDiv = menu;
  }

  removeMenu(){
    this.menuForm = false;
  }
  addMenu(){
    this.menuForm = true;
  }

}
