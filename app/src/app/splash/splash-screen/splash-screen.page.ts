import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    let route = this.route
    setTimeout(function () {
      route.navigate(["/intro1"]);
    }, 3000);
  }

}
