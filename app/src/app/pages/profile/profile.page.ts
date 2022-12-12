import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = -1;
  same: any = false;
  isWorker: any = false;
  catgs = [];

  worker_id: any = '';
  user_id: any = '';

  presentingElement: any = null;

  datentime: any = null;
  jobTitle: any = '';
  jobDescription: any = ''

  constructor(private router: Router, private http: HttpClient, private modalController: ModalController) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');

    this.user_id = localStorage.getItem("id");
    this.isWorker = localStorage.getItem("worker");

    let sent_id = this.router.getCurrentNavigation()?.extras.state;
    this.worker_id = JSON.parse(JSON.stringify(sent_id))["id"];

    if (this.worker_id == this.user_id) {
      this.same = true;
    }

    this.http.get(`http://127.0.0.1:8000/api/v0.1/user/${this.worker_id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let user = JSON.parse(tmp_data)["resp"];
        this.user = user;
      });

    if (this.isWorker != "false") {
      let postData = {
        "worker_id": this.worker_id,
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

  saveJob() {
    let tmp_dt = this.datentime.split("T");
    let date = tmp_dt[0];
    let tmp_time = tmp_dt[1].split("+");
    let time = tmp_time[0];

    let datentime = date + " " + time;

    let postData = {
      "worker_id": this.worker_id,
      "user_id": this.user_id,
      "dnt": datentime,
      "description": this.jobDescription,
      "title": this.jobTitle

    }

    this.http.post(`http://127.0.0.1:8000/api/v0.1/job/add`, postData)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let resp = JSON.parse(tmp_data)["resp"];
      });

    let notificationData = {
      "user_id": this.worker_id,
      "content": "You Received a job request",
      "type": "notification"

    }
    this.http.post(`http://127.0.0.1:8000/api/v0.1/notification/add`, notificationData)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let resp = JSON.parse(tmp_data)["resp"];
      });

    this.modalController.dismiss({
      'dismiss': true
    })
  }

}
