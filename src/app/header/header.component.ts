import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bSearch: boolean = false;
  bCart: boolean = false;
  bLogin: boolean = false;
  cSearch: string = "";
  cCart: string = "";
  cLogin: string = "";

  isShow: boolean = false;
  topPosToStartShowing = 100;

  constructor() { }

  ngOnInit(): void {
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //console.log('[scroll]', scrollPosition);

    this.fecharBox();

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  fnSearch(){
    if(this.bSearch == false){
      this.cSearch = 'active';
      this.cCart = '';
      this.cLogin = '';
      this.bCart = false;
      this.bLogin = false;
    } else {
      this.cSearch = '';
    }
    this.bSearch = !this.bSearch;
  }

  fnCart(){
    if(this.bCart == false){
      this.cCart = 'active';
      this.cSearch = '';
      this.cLogin = '';
      this.bSearch = false;
      this.bLogin = false;
    } else {
      this.cCart = '';
    }
    this.bCart = !this.bCart;
  }

  fnLogin(){
    if(this.bLogin == false){
      this.cLogin = 'active';
      this.cCart = '';
      this.cSearch = '';
      this.bSearch = false;
      this.bCart = false;
    } else {
      this.cLogin = '';
    }
    this.bLogin = !this.bLogin;
  }

  fecharBox(){
    this.cSearch = '';
    this.cCart = '';
    this.cLogin = '';
    this.bSearch = false;
    this.bCart = false;
    this.bLogin = false;
  }

}
