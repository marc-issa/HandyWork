import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function () {
      window.location.replace("../intro1");
    }, 2000);
  }

}
