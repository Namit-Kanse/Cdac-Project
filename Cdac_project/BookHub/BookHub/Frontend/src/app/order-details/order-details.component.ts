import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  showOrder: any;
  search: any;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("user_id") == null) {
      alert("please login to continue")
      this.router.navigate(['userLogin']);
    } else {
      this.service.userOrderDetails(Number(sessionStorage.getItem("user_id"))).subscribe(
        data => {

          this.showOrder = data;

        });
    }
  }

  navigateHome() {
    this.router.navigate(['userShowBook']);

  }

  processLogout() {
    sessionStorage.removeItem('user_id');
    this.router.navigate(['userLogin']);
  }

  invoice() {
    this.router.navigate(['report']);
  }

}
