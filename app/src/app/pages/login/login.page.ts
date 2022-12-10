import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Console } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username_email: String = "";
  password: String = "";
  resp_err: String = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  signin() {

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.username_email.match(regex)) {
      let postData = {
        "email": this.username_email,
        "password": this.password
      }
      this.http.post("http://127.0.0.1:8000/api/v0.1/user/loginEmail", postData)
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          let resp = JSON.parse(tmp_data)["resp"];
          if (resp == "wrong-email") {
            this.resp_err = "Wrong email"
          } else if (resp == "wrong-password") {
            this.resp_err = "Wrong password"
          } else {
            console.log("Logging in")
          }
        }, error => {
          console.log(error);
        });

    } else {
      let postData = {
        "username": this.username_email,
        "password": this.password
      }
      this.http.post("http://127.0.0.1:8000/api/v0.1/user/login", postData)
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          let resp = JSON.parse(tmp_data)["resp"];
          if (resp == "wrong-username") {
            this.resp_err = "Wrong username"
          } else if (resp == "wrong-password") {
            this.resp_err = "Wrong password"
          } else {
            console.log("Logging in")
          }
        }, error => {
          console.log(error);
        });
    }

  }

}
