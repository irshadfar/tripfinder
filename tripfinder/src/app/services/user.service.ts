import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserCredential, TripData, Weather, tripID } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: IUser): Observable<any>{
    return this.http
    .post('http://localhost:8888/tripAdvisor/user-registration', user)
    .pipe()
  }

  loginUser(credential: IUserCredential): Observable<any>{
    return this.http
    .post('http://localhost:8888/tripAdvisor/login', credential)
    .pipe()
  }

  getTripData(weather: Weather): Observable<any>{
    return this.http
    .post('http://localhost:8888/tripAdvisor/trip-data', weather)
    .pipe()
  }

  getTripId(): Observable<tripID>{
    return this.http
    .get<tripID>('http://localhost:8888/tripAdvisor/trip-id')
    .pipe()
  }


}
