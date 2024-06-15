import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminLoginServiceService } from '../admin-login-service.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public uiInvalidCredential = false;

  public faGoogle = faGoogle;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;


  adminLoginForm: any;
  adminLoginObj: any;
  // constructor(public form: FormBuilder, public router: Router, public service: AdminServiceService) {
  // }
  constructor(public form: FormBuilder, public router: Router, public service: AdminLoginServiceService) {
  }

  ngOnInit(): void {
    this.buildAdminLoginForm();
  }
  buildAdminLoginForm() {
    this.adminLoginForm = this.form.group({
      adminEmail: ['', [Validators.required, Validators.maxLength(20)]],
      adminPass: ['', [Validators.required]],
    });
  }

  get adminEmail() {
    return this.adminLoginForm.get('adminEmail');
  }

  get adminPass() {
    return this.adminLoginForm.get('adminPass');
  }

  checkAdminLogin(adminLoginForm: FormGroup) {
    //alert("test");
    this.adminLoginObj = {

      adminEmail: adminLoginForm.controls.adminEmail.value,
      adminPass: adminLoginForm.controls.adminPass.value,
    }

    console.log(this.adminLoginObj);

    this.service.verifyAdmin(this.adminLoginObj).subscribe(
      data => {

        console.log("response received");
        sessionStorage.setItem("admin_id", data.adminId.toString());
        this.router.navigate(['adminHome']);
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
        this.router.navigate(['adminLogin']);
      }
    );

    this.adminLoginForm.reset();

  }

};
