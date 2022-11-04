import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'veeezeee'
  password = 'Programuotojas2024!'

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
  }

}
