import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-showbook',
  templateUrl: './user-showbook.component.html',
  styleUrls: ['./user-showbook.component.css']
})
export class UserShowbookComponent implements OnInit {

  BookList: any;
  search: any;
  bookId: any;
  eBookobj: any;

  constructor(public router: Router, public service: UserService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("user_id") == null) {
      alert("please login to continue")
      this.router.navigate(['userLogin']);
    } else {
      this.service.userShowBook().subscribe(
        data => {
          this.BookList = data;
        });

    }
  }

  rentBook(id: any) {
    this.router.navigate(['userRentForm', id]);
  }

  processLogout() {
    sessionStorage.removeItem('user_id');
    this.router.navigate(['userLogin']);

  };

  navigateHome() {
    this.router.navigate(['userHome']);
  }

  eBook(id: any, book_price: any) {

    this.eBookobj = {
      cart_id: null,
      userId: Number(sessionStorage.getItem("user_id")),
      book_id: id,
      book_type: "eBook",
      no_of_days: "0",
      amount: book_price
    }

    console.log(this.eBookobj);

    this.service.rentBook(this.eBookobj).subscribe(
      data => {
        if (data.cart_id != null) {
          this.router.navigate(['showCart']);
        } else {
          alert("something went wrong wile Purchase");
        }

      });
  }

  navigateCart() {
    this.router.navigate(['showCart']);
  }
  navigateMyShelf() {
    this.router.navigate(['myShelf']);
  }

  navigateMyOrders() {
    this.router.navigate(['orderDetails']);
  }

}
