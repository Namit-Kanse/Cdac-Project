import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {


    if (sessionStorage.getItem("user_id") == null) {
      alert("please login to continue")
      this.router.navigate(['userLogin']);
    }

  }

  showBook() {

    this.router.navigate(['userShowBook']);

  }

  processLogout() {
    sessionStorage.removeItem('user_id');
    this.router.navigate(['userLogin']);

  };

}
