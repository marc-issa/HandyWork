import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  user_id: any = '';

  constructor() { }

  ngOnInit() {
    this.user_id = localStorage.getItem("id");


  }

}
