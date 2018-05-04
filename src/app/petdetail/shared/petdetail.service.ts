import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class PetdetailService {

  constructor(private socketManager: SocketManagerService) { }

  updatePet(pet){ 
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('update pet',pet).then(res=>{
        observer.next(res)
      })
    });
    return observable;
  }
}
