import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartList: any
  userPayment: any;
  id: any;
  userPaymentObj: any;
  rentBookObj: any;
  eBookObj: any;
  issue_date: any;
  due_date: any;
  currentDate = new Date();
  date = new Date();

  constructor(private activate: ActivatedRoute, public router: Router, public form: FormBuilder, public service: UserService) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem("user_id") == null) {
      alert("please login to continue")
      this.router.navigate(['userLogin']);
    } else {

      this.id = this.activate.paramMap.subscribe(parameterMap => {

        const id = parameterMap.get('id');
        this.getCartById(id);
        console.log(id);
        // this.myFunction();
      });

    }
    this.buildUserPaymentForm();
  }

  buildUserPaymentForm() {
    this.userPayment = this.form.group({
      cardNumber: ['', [Validators.required, Validators.maxLength(16)]],
      expMonth: ['', [Validators.required]],
      expYear: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
    });
  }

  get cardNumber() {
    return this.userPayment.get('cardNumber');
  }
  get expMonth() {
    return this.userPayment.get('expMonth');
  }
  get expYear() {
    return this.userPayment.get('expYear');
  }
  get cvv() {
    return this.userPayment.get('cvv');
  }





  checkPayment(userPayment: FormGroup) {

    this.userPaymentObj = {

      cardNumber: userPayment.controls.cardNumber.value,
      expMonth: userPayment.controls.expMonth.value,
      expYear: userPayment.controls.expYear.value,
      cvv: userPayment.controls.cvv.value,
    }

    console.log(this.userPaymentObj);

    this.service.verifyPayment(this.userPaymentObj).subscribe(
      data => {
        if (data) {
          //this.uiInvalidCredential = true;
          if (data == "success") {
            if (this.cartList.book_type == "rent") {

              this.date.setDate(this.date.getDate() + Number(this.cartList.no_of_days));
              this.rentBookObj = {

                userId: Number(sessionStorage.getItem("user_id")),
                book_id: this.cartList.book_id,
                issue_date: this.currentDate.getFullYear() + "-" + Number(this.currentDate.getMonth() + 1) + "-" + this.currentDate.getDate(), //new Date().toString(),
                book_type_order: "Rent",
                due_date: this.date.getFullYear() + "-" + Number(this.date.getMonth() + 1) + "-" + this.date.getDate(),
                // console.log(this.due_date);

                order_amount: this.cartList.amount,
              }

              this.service.insertIntoOrderDetails(this.rentBookObj).subscribe(
                data => {
                  if (data) {
                    //this.cartList = data;
                    if (data == true) {
                      //delete service
                      this.service.deleteBookFromCart(this.cartList.cart_id).subscribe(
                        data => { });
                      this.router.navigate(['paymentSuccess']);
                    } else {
                      alert("something went wrong");
                    }

                  } else {
                    alert("something went wrong");
                  }

                });

            } else {
              //ebook logic
              this.rentBookObj = {

                userId: Number(sessionStorage.getItem("user_id")),
                book_id: this.cartList.book_id,
                issue_date: this.currentDate.getFullYear() + "-" + Number(this.currentDate.getMonth() + 1) + "-" + this.currentDate.getDate(), //new Date().toString(),

                due_date: "NA",
                book_type_order: "Ebook",

                order_amount: this.cartList.amount,
              }
              this.service.insertIntoOrderDetails(this.rentBookObj).subscribe(
                data => {
                  if (data) {

                    if (data == true) {
                      //my shelf
                      this.eBookObj = {

                        userId: Number(sessionStorage.getItem("user_id")),
                        book_id: this.cartList.book_id,

                      }
                      this.service.insertIntoMyShelf(this.eBookObj).subscribe(
                        data => { });
                      //delete service
                      this.service.deleteBookFromCart(this.cartList.cart_id).subscribe(
                        data => { });
                      this.router.navigate(['myShelf']);
                    } else {
                      alert("something went wrong");
                    }

                  } else {
                    alert("something went wrong");
                  }

                });


            }


          } else if (data == "unsuccess") {

            alert("wrong credential..please try again!!");
            this.userPayment.reset();

          }

        }

      });



  }


  getCartById(id: any) {

    this.service.getCartDetailById(id).subscribe(
      data => {
        if (data) {
          this.cartList = data;

          console.log(this.cartList);
        } else {
          alert("something went wrong");
        }

      });

  }

  backToCart() {
    this.router.navigate(['showCart']);

  }

  navigateHome() {
    this.router.navigate(['userShowBook']);

  }

  processLogout() {
    sessionStorage.removeItem('user_id');
    this.router.navigate(['userLogin']);
  }

}
