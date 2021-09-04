import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

   hotel=[];
  constructor(private memoryData: InMemoryDataService) { }

  ngOnInit() {
    this.memoryData.getRestDetails()
    .subscribe(
      (hotel: any[])=>this.hotel = hotel
    );

  }

}
