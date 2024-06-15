import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminLoginServiceService } from '../admin-login-service.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  public uiInvalidCredential = false;

  public faGoogle = faGoogle;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;


  adminRegisterForm: any;
  adminRegisterObj: any;
  // constructor(public form: FormBuilder, public router: Router, public service: AdminServiceService) {
  // }
  constructor(public form: FormBuilder, public router: Router, public service: AdminLoginServiceService) {
  }

  ngOnInit(): void {
    this.buildAdminRegisterForm();
  }
  buildAdminRegisterForm() {
    this.adminRegisterForm = this.form.group({
      adminFirstName: ['', [Validators.required, Validators.maxLength(15)]],
      adminLastName: ['', [Validators.required]],
      adminEmail: ['', [Validators.required]],
      adminPassword: ['', [Validators.required]],
    });
  }

  get adminFirstName() {
    return this.adminRegisterForm.get('adminFirstName');
  }
  get adminLastName() {
    return this.adminRegisterForm.get('adminLastName');
  }
  get adminEmail() {
    return this.adminRegisterForm.get('adminEmail');
  }

  get adminPassword() {
    return this.adminRegisterForm.get('adminPassword');
  }

  checkAdminRegister(adminRegisterForm: FormGroup) {

    this.adminRegisterObj = {

      adminFirstName: adminRegisterForm.controls.adminFirstName.value,
      adminLastName: adminRegisterForm.controls.adminLastName.value,
      adminEmail: adminRegisterForm.controls.adminEmail.value,
      adminPass: adminRegisterForm.controls.adminPassword.value,
    }

    console.log(this.adminRegisterObj);

    this.service.registerAdmin(this.adminRegisterObj).subscribe(
      data => {
        if (data) {
          this.uiInvalidCredential = true;
        }

      });
    this.adminRegisterForm.reset();

  }

}
