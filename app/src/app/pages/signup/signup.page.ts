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
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email.match(regex)) {
      let postData = {
        "username": this.username,
        "fname": this.fname,
        "lname": this.lname,
        "email": this.email,
        "address": this.address,
        "password": this.password
      }
      this.http.post("http://127.0.0.1:8000/api/v0.1/user/signup", postData)
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          let resp = JSON.parse(tmp_data)["resp"];

          if (resp == "username-exists") {
            this.resp_err = "Username already exists"
          } else if (resp == "email-exists") {
            this.resp_err = "Email already exists"
          } else {
            console.log("redirecting")
          }

        }, error => {
          console.log(error);
        });
    } else {
      this.resp_err = "Please enter a valid email"
    }


  }

  signinRedirect() {
    this.router.navigate(["/login"]);
  }

}
