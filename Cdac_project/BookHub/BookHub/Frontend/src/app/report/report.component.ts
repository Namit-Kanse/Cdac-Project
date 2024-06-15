import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  showOrder: any;
  finalAmount = 0;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("user_id") == null) {
      alert("please login to continue")
      this.router.navigate(['userLogin']);
    } else {
      this.service.userOrderDetails(Number(sessionStorage.getItem("user_id"))).subscribe(
        data => {

          this.showOrder = data;

          // console.log(this.showOrder);
          for (var index in this.showOrder) {
            console.log(index); // prints indexes: 0, 1, 2, 3

            this.finalAmount = ((this.finalAmount) + (Number(this.showOrder[index].order_amount))); // prints elements: 10, 20, 30, 40
          }
          //console.log(this.finalAmount);
        });
    }


  }


  userAddress = String(sessionStorage.getItem("user_address"));
  userFirstName = String(sessionStorage.getItem("user_firstname"));
  userLastName = String(sessionStorage.getItem("user_lastname"));
  userEmail = String(sessionStorage.getItem("user_email"));
  userContact = String(sessionStorage.getItem("user_contact"));

  downloadReport() {

    var element = document.getElementById("printReport");

    html2canvas(element).then((canvas) => {
      console.log(canvas);

      var imgData = canvas.toDataURL('image/png')

      var docRepo = new jspdf.jsPDF();

      var imgHeight = canvas.height * 208 / canvas.width;

      docRepo.addImage(imgData, 0, 0, 208, imgHeight)

      docRepo.save("invoice.pdf");
    })
  }


}
