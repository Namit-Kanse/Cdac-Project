import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public uiInvalidCredential = false;

  public faGoogle = faGoogle;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;


  userRegisterForm: any;
  userRegisterObj: any;
  // constructor(public form: FormBuilder, public router: Router, public service: AdminServiceService) {
  // }
  constructor(public form: FormBuilder, public router: Router, public service: UserService) {
  }

  ngOnInit(): void {
    this.buildUserRegisterForm();
  }

  buildUserRegisterForm() {
    this.userRegisterForm = this.form.group({
      userFirstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}")]],
      userLastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{3,15}")]],
      userEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      userPassword: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      userContact: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}')]],
      userAddress: ['', [Validators.required]],
    });
  }

  get userFirstName() {
    return this.userRegisterForm.get('userFirstName');
  }

  get userLastName() {
    return this.userRegisterForm.get('userLastName');
  }
  get userEmail() {
    return this.userRegisterForm.get('userEmail');
  }
  get userPassword() {
    return this.userRegisterForm.get('userPassword');
  }
  get userContact() {
    return this.userRegisterForm.get('userContact');
  }
  get userAddress() {
    return this.userRegisterForm.get('userAddress');
  }

  checkUserRegister(userRegisterForm: FormGroup) {

    this.userRegisterObj = {

      userFirstName: userRegisterForm.controls.userFirstName.value,
      userLastName: userRegisterForm.controls.userLastName.value,
      userPass: userRegisterForm.controls.userPassword.value,
      userEmail: userRegisterForm.controls.userEmail.value,
      userContact: userRegisterForm.controls.userContact.value,
      userAddress: userRegisterForm.controls.userAddress.value,
    }

    console.log(this.userRegisterObj);

    this.service.registerUser(this.userRegisterObj).subscribe(
      data => {
        if (data == true) {
          this.uiInvalidCredential = true;
        } else {
          alert("User already Exist!!!");
        }

      });

    // this.service.verifyAdmin(this.userRegisterObj).subscribe(
    //   data => {
    //     if (data.adminId != undefined) {

    //       sessionStorage.setItem("adminId", JSON.stringify(data.adminId));
    //       this.router.navigate(['adminHome']);
    //     }
    //     else {
    //       alert("Please Enter Valid Credentials");
    //       this.router.navigate(['adminLogin']);
    //     }
    //   });

    this.userRegisterForm.reset();
  }

}
