import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.models';
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


}