import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class NewPetService {
  
  constructor(private socketManager: SocketManagerService) { 
    
  }

  
  createPet(pet){ 
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('create pet',pet).then(res=>{
        observer.next(res);
          })
    });
    return observable;
  }
  
  getPetBreed(){
    let observable = new Observable<any>(observer=>{
      this.socketManager.emit('all pet breeds',{}).then(res=>{
        observer.next(res);
      })
    });
    return observable;
  }

  getPetSpecies(){
    let observable = new Observable<any>(observer=>{
      this.socketManager.emit('all pet species',{}).then(res=>{
        observer.next(res);
      })
    });
    return observable;
  }

}
