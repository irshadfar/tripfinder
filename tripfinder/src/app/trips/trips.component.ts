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
  weather: Weather = {userId: 0, tripId: 0, location: '', dateTime: '', weather:['']};
  tripId: tripID = {  userID: '', tripID: ''}


  constructor(private userService: UserService, 
    private router: Router){}

  ngOnInit(){
    this.userService.getTripId().subscribe({
      next: (data) => {this.tripId = data}
    })
  }
  onSubmit(){
    this.userService.getTripData(this.weather).subscribe({
      next: (data) => {this.weather}
    })
  }
}
