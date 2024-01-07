import { Component, Output } from '@angular/core';
import { TripData, Weather } from '../models/user.models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tripData: TripData = {userId: 0, tripId: 0, location: '', dateTime: ''}
  weather: Weather = {userId:0, tripId:0, location:'', dateTime:'', weather:''}
  weather2: Weather = {userId:0, tripId:0, location:'', dateTime:'', weather:''}

  constructor(private userService: UserService,
    private router: Router){

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

  interetShownOnTrip(){
    this.tripData.location = "Manchester, United Kingdom",
    this.tripData.dateTime = "2024-01-10",
    this.userService.getTripData(this.tripData).subscribe({
      next: (data) => {
        this.weather = data;
        this.router.navigate(['/trips'])
      }
    })
  }
}
