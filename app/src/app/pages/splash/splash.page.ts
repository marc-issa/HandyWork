import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function () {
      window.location.replace("../../home")
    }, 3000)
  }

}
