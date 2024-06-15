import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { MyShelfComponent } from './my-shelf/my-shelf.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportComponent } from './report/report.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { ShowUserDetailsComponent } from './show-user-details/show-user-details.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRentFormComponent } from './user-rent-form/user-rent-form.component';
import { UserShowbookComponent } from './user-showbook/user-showbook.component';

const routes: Routes = [



  { path: 'adminRegister', component: AdminRegisterComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'showBook', component: ShowBookComponent },
  { path: 'editBook/:id', component: EditBookComponent },
  { path: 'home', component: HomeComponent },
  { path: 'showUser', component: ShowUserDetailsComponent },
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'userShowBook', component: UserShowbookComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'userRentForm/:id', component: UserRentFormComponent },
  { path: 'showCart', component: ShowCartComponent },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'paymentSuccess', component: PaymentSuccessfulComponent },
  { path: 'orderDetails', component: OrderDetailsComponent },
  { path: 'myShelf', component: MyShelfComponent },
  { path: 'report', component: ReportComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: "**", component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
