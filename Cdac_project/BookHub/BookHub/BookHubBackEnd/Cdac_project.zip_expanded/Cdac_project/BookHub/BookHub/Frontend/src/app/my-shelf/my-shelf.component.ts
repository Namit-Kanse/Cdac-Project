import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-shelf',
  templateUrl: './my-shelf.component.html',
  styleUrls: ['./my-shelf.component.css']
})
export class MyShelfComponent implements OnInit {

  ShelfList: any;
  search: any;
  flag: boolean;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("user_id") == null) {
      alert("please login to continue")
      this.router.navigate(['userLogin']);
    } else {
      this.service.showMyShelf(Number(sessionStorage.getItem("user_id"))).subscribe(
        data => {
          this.ShelfList = data;
        });

    }
  }

  deleteEBookFromShelf(id: any) {
    this.service.deleteMyShelf(id).subscribe(
      data => {
        if (data = "success") {
          this.service.showMyShelf(Number(sessionStorage.getItem("user_id"))).subscribe(
            data => {

              this.ShelfList = data;

            });
        }
        else {
          alert("something went wrong");
        }
      });


  }

  navigateHome() {
    this.router.navigate(['userShowBook']);
  }

  processLogout() {
    sessionStorage.removeItem('user_id');
    this.router.navigate(['userLogin']);

  };
}
