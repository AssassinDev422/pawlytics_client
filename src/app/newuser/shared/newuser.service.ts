import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class NewuserService {

  constructor(private socketManager: SocketManagerService) { }

  createEmployee(user){ 
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('create employee',user).then(res=>{
        observer.next(res);
          })
    });
    return observable;
  }
  createVolunteer(user){ 
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('create volunteer',user).then(res=>{
        observer.next(res);
          })
    });
    return observable;
  }
  createUser(user){ 
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('create user',user).then(res=>{
        observer.next(res);
          })
    });
    return observable;
  }
}
