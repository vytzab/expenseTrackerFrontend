import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'veeezeee'
  password = 'Programuotojas2024!'
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'veeezeee' && this.password === 'Programuotojas2024!') {
      this.invalidLogin = false
      this.router.navigate(['welcome'])
    } else {
      this.invalidLogin = true
    }
  }

}
