import { Component, OnInit , OnDestroy } from '@angular/core';
import { NewPetService } from './shared/new-pet.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css'],
  providers: [NewPetService]
})
export class NewPetComponent implements OnInit  {
  petBreed:any; petSpecies:any;   msg:any;  pet:any={};

  constructor(private newPetServices:NewPetService) { }
  ngOnInit() {
    this.newPetServices.getPetBreed().subscribe(res =>{
        this.petBreed = res; 
    });
    this.newPetServices.getPetSpecies().subscribe(res =>{
      this.petSpecies = res;
      console.dir(res);
    });
  }

  createPet(pet){
    this.newPetServices.createPet(pet).subscribe(res =>{
      console.dir(res);
      this.msg= res;
    });
  } 

}
