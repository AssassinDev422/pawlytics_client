import { Component, OnInit } from '@angular/core';
import { PetService } from './shared/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  providers: [PetService]
})
export class PetsComponent implements OnInit {
  pets:any;
  
  constructor(private petService:PetService,private router:Router) { }

  ngOnInit() {
    this.petService.getPets().subscribe(res =>{
        this.pets = res; 
    });
  }
  viewDetail(pet){
    console.dir(pet);
    localStorage.setItem('pet',JSON.stringify(pet));
    this.router.navigate(['/petdetail/']);
  }
}
