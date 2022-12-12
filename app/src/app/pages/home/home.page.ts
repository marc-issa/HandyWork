import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  id: any = -1;
  user: any = -1;
  isWorker: any = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = localStorage.getItem("id");
    this.http.get(`http://127.0.0.1:8000/api/v0.1/user/${this.id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let user = JSON.parse(tmp_data)["resp"];
        this.user = user;

        let postData = {
          "user_id": this.id,
        }

        this.http.post(`http://127.0.0.1:8000/api/v0.1/worker/get`, postData)
          .subscribe(data => {
            let tmp_data = JSON.stringify(data);
            let user = JSON.parse(tmp_data)["resp"];
            if (user == false) {
              this.isWorker = false;
            } else {
              this.isWorker = user["hourly_rate"];
            }
            localStorage.setItem("worker", this.isWorker)
          });
      });

  }

  profileRedirect() {
    this.router.navigate(["profile"], { state: { "id": this.id } })
  }

  settingsRedirect() {

  }

  redirectToClean() {
    this.router.navigate(["/car"], { state: { "page": "Cleaner" } });
  }
  redirectToPlumber() {
    this.router.navigate(["/car"], { state: { "page": "Plumber" } });
  }
  redirectToPaint() {
    this.router.navigate(["/car"], { state: { "page": "Painter" } });
  }
  redirectToElectric() {
    this.router.navigate(["/car"], { state: { "page": "Electrician" } });
  }
  redirectToCar() {
    this.router.navigate(["/car"], { state: { "page": "Mechanic" } });
  }
  redirectToWashing() {
    this.router.navigate(["/car"], { state: { "page": "Car Washing" } });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/splash-screen"]);
  }

}
