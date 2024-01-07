import { Component } from '@angular/core';
import { TripData, Weather } from '../models/user.models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tripData: TripData = {userId: 0, tripId: 0, location: '', dateTime: ''}
  weather: Weather = {userId:0, tripId:0, location:'', dateTime:'', weather:''}

  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.tripData.location = "Paris, France",
    this.tripData.dateTime = "2024-01-10",
    this.userService.getTripData(this.tripData).subscribe({
      next: (data) => {
        this.weather = data;
      }
    })
  }
}
