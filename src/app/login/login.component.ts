import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vytzab@gmail.com'
  password = '12345'
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.authenticationService.executeAuthenticationService(this.username, this.password)) {
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
