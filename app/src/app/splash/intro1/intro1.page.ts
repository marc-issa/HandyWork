import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.page.html',
  styleUrls: ['./intro1.page.scss'],
})
export class Intro1Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navIntro2() {
    this.route.navigate(["/intro2"]);
  }

}
