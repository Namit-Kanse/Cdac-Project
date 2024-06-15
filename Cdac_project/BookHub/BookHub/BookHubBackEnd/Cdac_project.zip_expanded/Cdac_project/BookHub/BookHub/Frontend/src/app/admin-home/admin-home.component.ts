import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("admin_id") == null) {
      alert("please login to continue")
      this.router.navigate(['adminLogin']);
    }
  }

  addBook() {
    this.router.navigate(['addBook']);
  }
  showBook() {
    this.router.navigate(['showBook']);
  }

  showUser() {
    this.router.navigate(['showUser']);
  }

  processLogout() {
    sessionStorage.removeItem('admin_id');
    this.router.navigate(['adminLogin']);

  };


}
