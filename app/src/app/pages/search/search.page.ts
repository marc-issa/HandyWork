import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: String = '';
  workers = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {

  }
  getResult() {
    let searchTerm = this.searchTerm.toLowerCase();
    if (searchTerm != "") {
      this.http.get(`http://127.0.0.1:8000/api/v0.1/worker/find/username/${searchTerm}`)
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          this.workers = JSON.parse(tmp_data)["resp"];
        })
      if (this.workers.length == 0) {
        searchTerm = this.searchTerm.charAt(0).toUpperCase() + this.searchTerm.slice(1)
        this.http.get(`http://127.0.0.1:8000/api/v0.1/worker/find/address/${searchTerm}`)
          .subscribe(data => {
            let tmp_data = JSON.stringify(data);
            this.workers = JSON.parse(tmp_data)["resp"];
          })
      }
    } else {
      this.workers = [];
    }

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



}
