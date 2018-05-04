import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { UserdetailService } from './shared/userdetail.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user:any;
  is_edit:boolean;
  btnEdit:string;
  msg:any;
  uuid:string;

  constructor(private userdetailService: UserdetailService) { }

  ngOnInit() {    
  this.user=JSON.parse(localStorage.getItem('user'));
  this.uuid=this.user.uuid;
  this.is_edit=true;
  this.btnEdit="Edit User";
  }
  updateUser(user){
    if(this.btnEdit=="Edit User"){
      this.btnEdit="Save Changes";
      this.is_edit=false;
    }
    else
    {
      user.id=this.uuid;
      this.userdetailService.updateUser(user).subscribe(res =>{
        this.msg= res;
      });
    }
  }
}
