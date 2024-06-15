import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-rent-form',
  templateUrl: './user-rent-form.component.html',
  styleUrls: ['./user-rent-form.component.css']
})
export class UserRentFormComponent implements OnInit {

  rentForm: any;
  id: any;
  bookObj: any;
  rentBookObj: any;
  selectedValue = "1";
  finalAmount = 0;
  flag = false;



  constructor(private activate: ActivatedRoute, public service: UserService, public router: Router, public form: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activate.paramMap.subscribe(parameterMap => {

      const id = parameterMap.get('id');
      this.getBooKById(id);
      console.log(id);
    });
    this.buildRentForm();

  }


  buildRentForm() {
    this.rentForm = this.form.group({
      noOfDays: ['', [Validators.required]],
    });
  }

  get noOfDays() {
    return this.rentForm.get('noOfDays');
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

  cart(rentForm: any) {

    this.rentBookObj = {
      cart_id: null,
      userId: Number(sessionStorage.getItem("user_id")),
      book_id: this.bookObj.book_id,
      book_type: "rent",
      no_of_days: rentForm.controls.noOfDays.value,
      amount: this.finalAmount
    }

    console.log(this.bookObj);

    this.service.rentBook(this.rentBookObj).subscribe(
      data => {
        if (data.cart_id != null) {
          this.router.navigate(['showCart']);
        } else {
          alert("something went wrong while Purchase");
        }

      });


  }



  totalAmount(rentForm: any) {
    if (rentForm.controls.noOfDays.value) {
      this.selectedValue = rentForm.controls.noOfDays.value;
      this.finalAmount = Number(this.selectedValue) * this.bookObj.rent_price;
      this.flag = true;
    }
  }



  navigateBack() {
    this.router.navigate(['userShowBook']);
  }


}