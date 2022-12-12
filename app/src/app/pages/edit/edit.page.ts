import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { off } from 'process';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  id: any = '';
  isWorker: any = '';
  user: any = '';

  catgs: any = [];
  all_catgs: any = ["Cleaner", "Plumber", "Painter", "Mechanic", "Electrician", "Car Washing"];
  checked_catgs: any = [];

  cleaner: any = false;
  plumber: any = false;
  painter: any = false;
  mechanic: any = false;
  electrician: any = false;
  car_washing: any = false;

  username: any = '';
  fname: any = '';
  lname: any = '';
  email: any = '';
  address: any = '';
  password: any = '';
  hr: any = '';
  type: any = '';

  value: any = '';

  presentElement: any = null;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.type = true;
    this.presentElement = document.querySelector('.ion-page');

    this.id = localStorage.getItem("id")
    this.isWorker = localStorage.getItem("worker")

    this.http.get(`http://127.0.0.1:8000/api/v0.1/user/${this.id}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        let user = JSON.parse(tmp_data)["resp"];
        this.user = user;
      });

    if (this.isWorker != "false") {
      let postData = {
        "worker_id": this.id,
      }
      this.http.post(`http://127.0.0.1:8000/api/v0.1/worker/categorie/get`, postData)
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          let user = JSON.parse(tmp_data)["resp"];
          for (let catg of user) {
            let str = catg["categorie"].charAt(0).toUpperCase() + catg["categorie"].slice(1)
            this.catgs.push(str);
            if (this.all_catgs.includes(str)) {
              let index = this.all_catgs.indexOf(str);
              this.all_catgs.splice(index, 1);
            }
          }
        });
    }
  }

  editProfile() {
    if (!(this.checked_catgs.length == 0)) {
      for (let catg of this.checked_catgs) {
        this.catgs.push(catg.charAt(0).toUpperCase() + catg.slice(1));
        let index = this.all_catgs.indexOf(catg);
        this.all_catgs.splice(index, 1);
        let postData = {
          "worker_id": this.id,
          "catg": catg,
        }
        this.http.post(`http://127.0.0.1:8000/api/v0.1/worker/categorie/add`, postData)
          .subscribe(data => data)
      }
    }

    this.router.navigate(["/profile"], { state: { "id": this.id } })
  }

  deleteCatg(value: any) {
    this.all_catgs.push(value.charAt(0).toUpperCase() + value.slice(1));
    let index = this.catgs.indexOf(value);
    this.catgs.splice(index, 1);
    let postData = {
      "worker_id": this.id,
      "categorie": value.toLowerCase(),
    }
    this.http.post(`http://127.0.0.1:8000/api/v0.1/worker/categorie/delete`, postData)
      .subscribe(data => data)
  }

  saveCleaner() {
    if (!this.cleaner) {
      this.checked_catgs.push("cleaner")
    } else {
      let index = this.checked_catgs.indexOf("cleaner");
      this.checked_catgs.splice(index, 1);
    }
  }

  savePlumber() {
    if (!this.plumber) {
      this.checked_catgs.push("plumber")
    } else {
      let index = this.checked_catgs.indexOf("plumber");
      this.checked_catgs.splice(index, 1);
    }
  }

  savePainter() {
    if (!this.painter) {
      this.checked_catgs.push("painter")
    } else {
      let index = this.checked_catgs.indexOf("painter");
      this.checked_catgs.splice(index, 1);
    }
  }

  saveMechanic() {
    if (!this.mechanic) {
      this.checked_catgs.push("mechanic")
    } else {
      let index = this.checked_catgs.indexOf("mechanic");
      this.checked_catgs.splice(index, 1);
    }
  }
  saveElectrician() {
    if (!this.electrician) {
      this.checked_catgs.push("electrician")
    } else {
      let index = this.checked_catgs.indexOf("electrician");
      this.checked_catgs.splice(index, 1);
    }
  }
  saveCarWashing() {
    if (!this.car_washing) {
      this.checked_catgs.push("car washing")
    } else {
      let index = this.checked_catgs.indexOf("car washing");
      this.checked_catgs.splice(index, 1);
    }
  }

  profileRedirect() {
    this.router.navigate(["profile"], { state: { "id": this.id } })
  }
}
