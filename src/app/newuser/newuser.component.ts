import { Component, OnInit } from '@angular/core';
import { NewuserService } from './shared/newuser.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  user:any={};msg:any;
  constructor(private newuserService:NewuserService) { }

  ngOnInit() {
  }
  createPJ(user){
    if(user.type=="volunteer"){
      this.newuserService.createVolunteer(user).subscribe(res =>{
        console.dir(res);
        this.msg= res;
      });
    }
    else if(user.type=="employee"){
      this.newuserService.createEmployee(user).subscribe(res =>{
        console.dir(res);
        this.msg= res;
      });
    }else if(user.type=="user"){
      this.newuserService.createUser(user).subscribe(res =>{
        console.dir(res);
        this.msg= res;
      });
    }
  }
}
