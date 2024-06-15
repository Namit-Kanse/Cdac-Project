import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public uiInvalidCredential = false;

  public faGoogle = faGoogle;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;


  userLoginForm: any;
  userLoginObj: any;
  // constructor(public form: FormBuilder, public router: Router, public service: AdminServiceService) {
  // }
  constructor(public form: FormBuilder, public router: Router, public service: UserService) {
  }

  ngOnInit(): void {

    this.buildUserLoginForm();

  }

  buildUserLoginForm() {
    this.userLoginForm = this.form.group({
      userEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      userPass: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    });
  }

  get userEmail() {
    return this.userLoginForm.get('userEmail');
  }

  get userPass() {
    return this.userLoginForm.get('userPass');
  }

  checkUserLogin(userLoginForm: FormGroup) {
    // alert("test");
    this.userLoginObj = {

      userEmail: userLoginForm.controls.userEmail.value,
      userPass: userLoginForm.controls.userPass.value,
    }

    console.log(this.userLoginObj);

    this.service.verifyUser(this.userLoginObj).subscribe(
      data => {
        console.log("response received");
        sessionStorage.setItem("user_id", data.userId.toString());
        sessionStorage.setItem("user_address", data.userAddress.toString());
        sessionStorage.setItem("user_firstname", data.userFirstName.toString());
        sessionStorage.setItem("user_lastname", data.userLastName.toString());
        sessionStorage.setItem("user_email", data.userEmail.toString());
        sessionStorage.setItem("user_contact", data.userContact.toString());
        console.log(data.userId);


        this.router.navigate(['userHome']);
        // if (data.adminId != undefined) {
        //   sessionStorage.setItem("adminId", JSON.stringify(data.adminId));
        //   this.router.navigate(['adminHome']);
        // }
        // else {
        //   alert("Please Enter Valid Credentials");
        //   this.router.navigate(['adminLogin']);
        // }
      },
      error => {

        this.uiInvalidCredential = true;
        this.router.navigate(['userLogin']);
      }
    );

    this.userLoginForm.reset();

  }

}
