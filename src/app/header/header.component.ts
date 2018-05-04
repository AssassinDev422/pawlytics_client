import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
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
