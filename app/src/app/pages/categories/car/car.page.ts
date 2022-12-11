import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  searchTerm: String = '';
  workers = [];
  all_workers = [];
  constructor(private router: Router, private http: HttpClient) { }
  categorie: any = '';
  ngOnInit() {
    let page = this.router.getCurrentNavigation()?.extras.state;
    let tmp_name = JSON.parse(JSON.stringify(page))["page"];
    this.categorie = tmp_name;

    let catg = tmp_name.toLowerCase();

    if (this.categorie != "Car Washing") {
      catg = catg.slice(0, -1);
    }

    this.http.get(`http://127.0.0.1:8000/api/v0.1/worker/find/getAll/${catg}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        this.all_workers = JSON.parse(tmp_data)["resp"];
      })
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
}
