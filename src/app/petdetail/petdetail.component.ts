import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { PetdetailService } from './shared/petdetail.service';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {
  pet:any;
  is_edit:boolean;
  btnEdit:string;
  msg:any;
  uuid:string;
  constructor( private petDetailServices: PetdetailService ) { }

  ngOnInit() {
    this.pet=JSON.parse(localStorage.getItem('pet'));
    this.uuid=this.pet.uuid;
    this.is_edit=true;
    this.btnEdit="Edit Pet";
  }
  updatePet(pet){
    if(this.btnEdit=="Edit Pet"){
      this.btnEdit="Save Changes";
      this.is_edit=false;
    }
    else
    {
      pet.id=this.uuid;
      this.petDetailServices.updatePet(pet).subscribe(res =>{
        this.msg= res;
      });
    }
  }
}
