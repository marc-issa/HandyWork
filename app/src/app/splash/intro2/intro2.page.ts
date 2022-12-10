import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {

  }

  navIntro3() {
    console.log("redirecting")
    this.route.navigate(["/intro3"])
  }

  navBack() {
    this.route.navigate(["/intro1"])
  }

}
