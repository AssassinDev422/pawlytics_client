import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class PetService {

  constructor(private socketManager: SocketManagerService) { 
    
  }
  getPets(){
    let observable = new Observable<any>(observer=>{
      this.socketManager.emit('get my org pets',{}).then(res=>{
        observer.next(res);
      })
    });
    return observable;   
  }
}
