import { Component } from '@angular/core';
import { IUser } from '../models/user.models';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  
  user: IUser = {name: '', email: '', password: ''};


  constructor(){

  }

  onSubmit(){
    console.log(this.user.name)
  }
}
