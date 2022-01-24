import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  login(): void{
    if((this.username == "admin" && this.password == "admin") || (this.username=="user" && this.password=="user")){
      //this.router.navigate(["user"]);
      this.router.navigate(["dashboard"]);
    }
    else{
      alert("Username or password are invalid")
    }
  }
}

