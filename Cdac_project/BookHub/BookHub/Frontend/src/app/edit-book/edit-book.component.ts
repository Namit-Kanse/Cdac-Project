import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginServiceService } from '../admin-login-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  adminAddBookForm: any;
  id: any;
  bookObj: any;
  editBookObj: any;
  bookImageUrl: any;
  bookPdfUrl: any;


  constructor(private activate: ActivatedRoute, public service: AdminLoginServiceService, public router: Router, public form: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activate.paramMap.subscribe(parameterMap => {

      const id = parameterMap.get('id');
      this.getBooKById(id);
      console.log(this.bookObj);
    });
    this.buildAdminAddForm();

  }

  buildAdminAddForm() {

    this.adminAddBookForm = this.form.group({
      bookName: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      bookPrice: ['', [Validators.required]],
      rentPrice: ['', [Validators.required]],
      bookDescription: ['', [Validators.required]],
      bookImage: ['', []],
      bookPdf: ['', []],
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

  public getBooKById(id: any) {
    this.service.getBookById(id).subscribe(
      data => {
        if (data != null) {
          this.bookObj = data;
          console.log(this.bookObj);
        }
      });
  }

  editBook(adminAddBookForm: FormGroup) {

    this.bookImageUrl = adminAddBookForm.controls.bookImage.value.split('fakepath');
    this.bookPdfUrl = adminAddBookForm.controls.bookPdf.value.split('fakepath'),

      this.editBookObj = {
        book_id: this.bookObj.book_id,
        book_name: adminAddBookForm.controls.bookName.value,
        author_name: adminAddBookForm.controls.authorName.value,
        book_price: adminAddBookForm.controls.bookPrice.value.toString(),
        book_description: adminAddBookForm.controls.bookDescription.value,
        book_image: "assets/images/" + this.bookImageUrl[1].substring(1),
        book_pdf: "assets/images/" + this.bookPdfUrl[1].substring(1),
        rent_price: adminAddBookForm.controls.rentPrice.value.toString(),
      }

    console.log(this.editBookObj);
    this.service.editBook(this.editBookObj).subscribe(
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
  }

}
