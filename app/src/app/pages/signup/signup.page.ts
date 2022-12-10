import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: String = "";
  fname: String = "";
  lname: String = "";
  email: String = "";
  address: String = "";
  password: String = "";
  resp_err: String = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  signup() {

  }

  signinRedirect() {
    this.router.navigate(["/login"]);
  }

}
