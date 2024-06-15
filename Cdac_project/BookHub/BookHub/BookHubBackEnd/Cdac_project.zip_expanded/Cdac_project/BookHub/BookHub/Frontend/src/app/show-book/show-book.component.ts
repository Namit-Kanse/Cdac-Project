import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from '../admin-login-service.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  BookList: any;
  search: any;
  bookId: any;
  constructor(public router: Router, public service: AdminLoginServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("admin_id") == null) {
      alert("please login to continue")
      this.router.navigate(['adminLogin']);
    } else {
      this.service.showBook().subscribe(
        data => {
          this.BookList = data;
        });

    }
  }

  addBook() {
    this.router.navigate(['addBook']);
  }

  navigateHome() {
    this.router.navigate(['adminHome']);
  }

  deleteBook(id: any) {
    this.service.deleteBook(id).subscribe(
      data => {
        if (data == "success") {
          this.service.showBook().subscribe(
            data => {
              this.BookList = data;
            });
        } else {
          alert("something went wrong while processing your request");
        }

      });
  }

  editBook(id: any) {
    this.router.navigate(['editBook', id]);
  }

  processLogout() {
    sessionStorage.removeItem('admin_id');
    this.router.navigate(['adminLogin']);

  };

}
