import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { ShowUserDetailsComponent } from './show-user-details/show-user-details.component';
import { UserShowbookComponent } from './user-showbook/user-showbook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserRentFormComponent } from './user-rent-form/user-rent-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MyShelfComponent } from './my-shelf/my-shelf.component';
import { ReportComponent } from './report/report.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AddBookComponent,
    ShowBookComponent,
    EditBookComponent,
    HomeComponent,
    ShowUserDetailsComponent,
    UserShowbookComponent,
    PageNotFoundComponent,
    CarouselComponent,
    UserRentFormComponent,
    ShowCartComponent,
    PaymentComponent,
    PaymentSuccessfulComponent,
    OrderDetailsComponent,
    MyShelfComponent,
    ReportComponent,
    ForgetPasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
