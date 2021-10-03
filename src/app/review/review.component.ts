import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions, Pagination, Navigation, Autoplay,  } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: false,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

  };

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
