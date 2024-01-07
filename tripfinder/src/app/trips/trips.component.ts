import { Component } from '@angular/core';
import { TripData, Weather, tripID } from '../models/user.models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  tripdata: TripData = {userId: 0, tripId: 0, location: '', dateTime: ''};
  weather: Weather = {userId: 0, tripId: 0, location: '', dateTime: '', weather: ''};
  tripId: tripID = {  userID: 0, tripID: 0}
  date: Date = new Date;
  showWeather: boolean = false


  constructor(private userService: UserService, 
    private router: Router){}

  ngOnInit(){
    this.userService.getTripId().subscribe({
      next: (data) => {this.tripId = data}
    })
  }
  onSubmit(){
    this.tripdata.userId = this.tripId.userID;
    this.tripdata.tripId = this.tripId.tripID;
    this.userService.getTripData(this.tripdata).subscribe({
      next: (data) => {
        this.weather = data;
        this.showWeather = true;
      }
      
    })
  }
}
