import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InMemoryDataService } from './../../in-memory-data.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.css']
})
export class HotelDashboardComponent implements OnInit {
 rest_id :String;

  rest_dash=[];
  rest_dish=[];

  constructor(private route: ActivatedRoute, private memoryData :InMemoryDataService) {
    route.params.subscribe(params => {this.rest_id = params['hotel_id']});
   }

  ngOnInit() {
    this.memoryData.getRestDashBoard(this.rest_id)
    .subscribe(
      (rest_dash :any[]) => this.rest_dash = rest_dash
      );

      this.memoryData.getRestDish(this.rest_id)
      .subscribe(
        (rest_dish: any[]) => this.rest_dish = rest_dish
      );

  }

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  modal_view =false;
 
}
