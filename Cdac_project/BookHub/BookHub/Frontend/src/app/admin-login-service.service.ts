import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminLoginServiceService {

  url = "http://localhost:8080/booklib-project";
  constructor(private http: HttpClient) { }

  registerAdmin(adminRegisterObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/adminregister", adminRegisterObj);

  }

  verifyAdmin(adminLoginObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/adminlogin", adminLoginObj);

  }

  addBook(addBookObj: any): Observable<any> {
    return this.http.post<any>(this.url + "/addBook", addBookObj);
  }

  showBook(): Observable<any> {
    return this.http.get<any>(this.url + "/showBook");
  }

  deleteBook(id: any): Observable<any> {
    return this.http.delete(`${this.url}/deleteBook/${id}`, { responseType: 'text' });
  }

  getBookById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/getBookById/${id}`);
  }

  showUser(): Observable<any> {
    return this.http.get<any>(this.url + "/showUser");
  }

  editBook(editBookObj: any): Observable<any> {
    return this.http.put<any>(this.url + "/editBook", editBookObj);
  }



  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.url}/deleteUser/${id}`, { responseType: 'text' });
  }
}
