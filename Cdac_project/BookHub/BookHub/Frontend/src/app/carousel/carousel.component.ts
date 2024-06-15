import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover4.jpg", "/assets/images/cover5.jpg"];

}
