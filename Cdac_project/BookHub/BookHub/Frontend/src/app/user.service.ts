import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8080/booklib-project";
  constructor(private http: HttpClient) { }

  registerUser(userRegisterObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/userregister", userRegisterObj);
  }

  verifyUser(userLoginObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/userlogin", userLoginObj);

  }


  userShowBook(): Observable<any> {
    return this.http.get<any>(this.url + "/userShowBook");
  }


  getBookById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/getUserBookById/${id}`);
  }


  rentBook(rentBookObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/rentBook", rentBookObj);
  }

  showCart(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/showCart/${id}`);
  }

  deleteBookFromCart(id: any): Observable<any> {
    return this.http.delete(`${this.url}/deleteBookFromCart/${id}`, { responseType: 'text' });
  }


  getCartDetailById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/getCartDetailById/${id}`);
  }


  verifyPayment(userPaymentObj: any): Observable<any> {
    return this.http.post(this.url + "/verifyPayment", userPaymentObj, { responseType: 'text' });
  }


  insertIntoOrderDetails(insertBookObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/rentOrderDetails", insertBookObj);

  }


  insertIntoMyShelf(insertIntoMyShelfObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/myShelf", insertIntoMyShelfObj);

  }

  showMyShelf(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/userMyShelf/${id}`);
  }


  deleteMyShelf(id: any): Observable<any> {
    return this.http.delete(`${this.url}/deleteBookFromShelf/${id}`, { responseType: 'text' });
  }


  userOrderDetails(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/userGetOrder/${id}`);
  }

  updateUser(userLoginObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/userForget", userLoginObj);

  }

}