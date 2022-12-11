import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  id: any = -1;
  user: any = -1;

  constructor(private router: Router, private http: HttpClient, private location: Location) { }

  ngOnInit() {
    this.id = localStorage.getItem("id");
    this.http.get(`http://127.0.0.1:8000/api/v0.1/user/${this.id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let user = JSON.parse(tmp_data)["resp"];
        this.user = user;
      })

  }

  profileRedirect() {
    console.log("Redirecting to profile page...");
  }

  redirectToClean() {
    this.router.navigate(["/clean"]);
  }
  redirectToPlumber() {
    this.router.navigate(["/plumber"]);
  }
  redirectToPaint() {
    this.router.navigate(["/painter"]);
  }
  redirectToElectric() {
    this.router.navigate(["/electrician"]);
  }
  redirectToCar() {
    this.router.navigate(["/car"]);
  }
  redirectToWashing() {
    this.router.navigate(["/washing"]);
  }

  logout() {
    localStorage.removeItem("id");
    this.router.navigate(["/splash-screen"])
  }

}
