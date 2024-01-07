import { Component } from '@angular/core';
import { IUserCredential } from '../models/user.models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credential: IUserCredential = {email: '', password: ''}
  loginError: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router){

  }
  onSubmit(){
    this.userService.loginUser(this.credential).subscribe({
      next: (data) => {
        if (data.login == "success"){
          this.router.navigate(['/home'])
        } else {
          this.loginError = true;
        }
      
      },
      error: () => (this.loginError = true)
    })
  }
}
