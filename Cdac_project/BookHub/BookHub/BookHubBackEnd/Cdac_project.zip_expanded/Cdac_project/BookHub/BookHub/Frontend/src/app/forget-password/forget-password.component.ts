import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {


  public uiInvalidCredential = false;

  public faGoogle = faGoogle;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;


  userLoginForm: any;
  userLoginObj: any;
  // constructor(public form: FormBuilder, public router: Router, public service: AdminServiceService) {
  // }
  constructor(public form: FormBuilder, public service: UserService) {
  }

  ngOnInit(): void {

    this.buildUserLoginForm();

  }

  buildUserLoginForm() {
    this.userLoginForm = this.form.group({
      userEmail: ['', [Validators.required, Validators.maxLength(20)]],
      userNewPass: ['', [Validators.required]],
    });
  }

  get userEmail() {
    return this.userLoginForm.get('userEmail');
  }

  get userNewPass() {
    return this.userLoginForm.get('userNewPass');
  }

  checkUserLogin(userLoginForm: FormGroup) {
    // alert("test");
    this.userLoginObj = {

      userEmail: userLoginForm.controls.userEmail.value,
      userPass: userLoginForm.controls.userNewPass.value,

      userFirstName: String(sessionStorage.getItem("user_firstname")),
      userLastName: String(sessionStorage.getItem("user_lastname")),

      userContact: String(sessionStorage.getItem("user_contact")),
      userAddress: String(sessionStorage.getItem("user_address")),


    }

    console.log(this.userLoginObj);

    this.service.updateUser(this.userLoginObj).subscribe(
      data => {
        console.log("response received");

      },
      error => {

        this.uiInvalidCredential = true;

      }
    );

    this.userLoginForm.reset();

  }

}
