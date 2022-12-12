import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  user_id: any = '';
  all_jobs = [];
  user_jobs = [];
  worker_jobs = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.user_id = localStorage.getItem("id");

    this.getUserJobs()


  }

  getUserJobs() {
    this.http.get(`http://127.0.0.1:8000/api/v0.1/job/get/user/${this.user_id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        this.user_jobs = JSON.parse(tmp_data)["resp"];
        if (String(this.user_jobs) == "no-jobs-available") {
          this.user_jobs = [];
        }
      })

    this.http.get(`http://127.0.0.1:8000/api/v0.1/job/get/worker/${this.user_id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        this.worker_jobs = JSON.parse(tmp_data)["resp"];
        if (String(this.worker_jobs) == "no-jobs-available") {
          this.worker_jobs = [];
        }
      })
  }

  acceptJob(param: any) {
    let postData = {
      "job_id": param,
      "status": "Accepted"
    }

    this.http.post(`http://127.0.0.1:8000/api/v0.1/job/updateStatus`, postData)
      .subscribe(data => data);
  }
  rejectJob(param: any) {
    let postData = {
      "job_id": param,
      "status": "Rejected"
    }

    this.http.post(`http://127.0.0.1:8000/api/v0.1/job/updateStatus`, postData)
      .subscribe(data => data);
  }
}
