import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from '../admin-login-service.service';

@Component({
  selector: 'app-show-user-details',
  templateUrl: './show-user-details.component.html',
  styleUrls: ['./show-user-details.component.css']
})
export class ShowUserDetailsComponent implements OnInit {

  UserList: any;
  search: any;

  constructor(public router: Router, public service: AdminLoginServiceService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("admin_id") == null) {
      alert("please login to continue")
      this.router.navigate(['adminLogin']);
    } else {
      this.service.showUser().subscribe(
        data => {
          this.UserList = data;
        });

    }
  }


  deleteUsers(id: any) {
    this.service.deleteUser(id).subscribe(
      data => {
        console.log(id);
        if (data = "success") {
          this.service.showUser().subscribe(
            data => {
              this.UserList = data;
            });
        }
      });

  }


  navigateHome() {
    this.router.navigate(['adminHome']);
  }

  processLogout() {
    sessionStorage.removeItem('admin_id');
    this.router.navigate(['adminLogin']);

  };



}

