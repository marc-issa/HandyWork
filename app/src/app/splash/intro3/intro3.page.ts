import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro3',
  templateUrl: './intro3.page.html',
  styleUrls: ['./intro3.page.scss'],
})
export class Intro3Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navBack() {
    this.route.navigate(["/intro2"])
  }

  redLogin() {
    this.route.navigate(["/login"])

  }

}
