import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id: any = -1;
  user: any = -1;
  same: any = false;
  isWorker: any = false;
  catgs = [];

  constructor(private router: Router, private http: HttpClient, private location: Location) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    this.isWorker = localStorage.getItem("worker");

    let sent_id = this.router.getCurrentNavigation()?.extras.state;
    let tmp_id = JSON.parse(JSON.stringify(sent_id))["id"];

    this.id = tmp_id;

    if (tmp_id == id) {
      this.id = id;
      this.same = true;
    }

    this.http.get(`http://127.0.0.1:8000/api/v0.1/user/${this.id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let user = JSON.parse(tmp_data)["resp"];
        this.user = user;
      });

    if (this.isWorker != "false") {
      let postData = {
        "worker_id": this.id,
      }
      this.http.post(`http://127.0.0.1:8000/api/v0.1/worker/categorie/get`, postData)
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          let user = JSON.parse(tmp_data)["resp"];
          this.catgs = user;
        });
    }
  }

  editRedirect() {
    this.router.navigate(["/edit"])
  }

  homeRedirect() {
    this.router.navigate(["/tabs"])
  }

}
