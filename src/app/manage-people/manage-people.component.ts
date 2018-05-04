import { Component, OnInit } from '@angular/core';
import { ManagepeopleService } from './shared/managepeople.service';

@Component({
  selector: 'app-manage-people',
  templateUrl: './manage-people.component.html',
  styleUrls: ['./manage-people.component.css']
})
export class ManagePeopleComponent implements OnInit {

  constructor(private managepeopleService:ManagepeopleService) { }
  volunteers:any;  
  ngOnInit() {    
    this.managepeopleService.getVolunteers().subscribe(res =>{
    this.volunteers = res; 
    console.log(res);
  });

  }
  listEmployees(){
    this.managepeopleService.getEmployees().subscribe(res =>{
      this.volunteers = res; 
      console.log(res);
  }); 
  }
  listVolunteers(){
    this.managepeopleService.getVolunteers().subscribe(res =>{
      this.volunteers = res; 
      console.log(res);
  }); 
  }
}
