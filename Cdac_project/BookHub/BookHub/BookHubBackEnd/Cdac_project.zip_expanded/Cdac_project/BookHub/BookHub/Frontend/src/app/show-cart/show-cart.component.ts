import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  search: any
  cartList: any;

  constructor(public router: Router, public service: UserService) { }

  ngOnInit(): void {
    this.service.showCart(Number(sessionStorage.getItem("user_id"))).subscribe(
      data => {
        if (data) {
          this.cartList = data;
          console.log(this.cartList);
        } else {
          alert("something went wrong");
        }

      });
  }


  deleteBookFromCart(id: any) {
    this.service.deleteBookFromCart(id).subscribe(
      data => {
        if (data == "success") {
          this.service.showCart(Number(sessionStorage.getItem("user_id"))).subscribe(
            data => {
              if (data) {
                this.cartList = data;
                console.log(this.cartList);
              } else {
                alert("something went wrong");
              }

            });
        } else {
          alert("something went wrong");
        }

      });
  }

  payBook(id: any) {


    this.router.navigate(['payment', id]);

  }

  navigateHome() {

    this.router.navigate(['userShowBook']);
  }

  processLogout() {
    sessionStorage.removeItem('user_id');
    alert("please login");
    this.router.navigate(['userLogin']);

  };


}
