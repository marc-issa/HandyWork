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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // let tmp_id = this.router.getCurrentNavigation()?.extras.state;
  }

  profileRedirect() {
    console.log("Redirecting to profile page...");
  }

}
