import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import { UserService } from '../user/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  employee:any={}; listUser:any;
  connection;
  msg:any;

  constructor(private UserServices:UserService,private router:Router) { }
  ngOnInit() {
    this.UserServices.getUsers().subscribe(res =>{
      this.listUser = res;
      console.dir(res);
    });
  }
  getUsers(){
    this.UserServices.getUsers().subscribe(res =>{
      this.listUser = res; 
    });
  }
  getOrg(){
    this.UserServices.getOrgs().subscribe(res =>{
      this.listUser = res; 
      console.dir(res);
    });
  }
  viewDetail(pet){
    console.dir(pet);
    localStorage.setItem('user',JSON.stringify(pet));
    this.router.navigate(['/userdetail/']);
  }
}
