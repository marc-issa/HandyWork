import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  user_id: any = -1;
  notfs: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user_id = localStorage.getItem("id");
    console.log(this.user_id);
    this.http.get(`http://127.0.0.1:8000/api/v0.1/notification/get/${this.user_id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let resp = JSON.parse(tmp_data)["resp"];
        this.notfs = resp;
      });
  }

}
