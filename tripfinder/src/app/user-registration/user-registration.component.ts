import { Component } from '@angular/core';
import { IUser } from '../models/user.models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  
  user: IUser = {name: '', email: '', password: ''};
  registrationError: boolean = false;

  constructor(private userService: UserService,
    private router: Router){

  }

  onSubmit(){
    this.userService.registerUser(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => (this.registrationError = true)
    })
  }
}
