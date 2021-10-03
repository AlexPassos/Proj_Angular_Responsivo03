import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions, Pagination, Navigation, Autoplay,  } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: false,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
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
