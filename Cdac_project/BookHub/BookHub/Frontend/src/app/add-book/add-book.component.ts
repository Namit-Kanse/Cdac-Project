import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from '../admin-login-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  adminAddBookForm: any;
  addBookObj: any;
  bookImageUrl: any;
  bookPdfUrl: any;
  finalBookUrl: any;
  finalPdfUrl: any;
  constructor(public form: FormBuilder, public router: Router, public service: AdminLoginServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("admin_id") == null) {
      alert("please login to continue")
      this.router.navigate(['adminLogin']);
    }
    this.buildAdminAddForm();
  }

  buildAdminAddForm() {

    this.adminAddBookForm = this.form.group({
      bookName: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      bookPrice: ['', [Validators.required]],
      rentPrice: ['', [Validators.required]],
      bookDescription: ['', [Validators.required]],
      bookImage: ['', [Validators.required]],
      bookPdf: ['', [Validators.required]],
    });
  }

  get bookName() {
    return this.adminAddBookForm.get('bookName');
  }
  get authorName() {
    return this.adminAddBookForm.get('authorName');
  }
  get bookPrice() {
    return this.adminAddBookForm.get('bookPrice');
  }
  get rentPrice() {
    return this.adminAddBookForm.get('rentPrice');
  }
  get bookDescription() {
    return this.adminAddBookForm.get('bookDescription');
  }
  get bookImage() {
    return this.adminAddBookForm.get('bookImage');
  }
  get bookPdf() {
    return this.adminAddBookForm.get('bookDescription');
  }


  addBook(adminAddBookForm: FormGroup) {
    this.bookImageUrl = adminAddBookForm.controls.bookImage.value.split('fakepath');
    this.bookPdfUrl = adminAddBookForm.controls.bookPdf.value.split('fakepath'),

      this.addBookObj = {
        book_id: null,
        book_name: adminAddBookForm.controls.bookName.value,
        author_name: adminAddBookForm.controls.authorName.value,
        book_price: adminAddBookForm.controls.bookPrice.value.toString(),
        book_description: adminAddBookForm.controls.bookDescription.value,
        book_image: "assets/images/" + this.bookImageUrl[1].substring(1),
        book_pdf: "assets/images/" + this.bookPdfUrl[1].substring(1),
        rent_price: adminAddBookForm.controls.rentPrice.value.toString(),
      }


    this.service.addBook(this.addBookObj).subscribe(
      data => {
        if (data.book_id != null) {
          console.log(data.book_id);
          this.router.navigate(['showBook']);
        } else {
          alert("something went wrong wile Adding Book");
          this.adminAddBookForm.reset();
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
