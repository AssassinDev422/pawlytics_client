import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLogin:boolean;
  constructor(private router : Router) { 
   }

  ngOnInit() {
    if(this.router.url=='/register'|| this.router.url=='/'){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
    this.router.events.subscribe((event:any) => {    
      this.isLogin = (event.url=='/register' ||  event.url=='/');    
    
    });
  } 

}
