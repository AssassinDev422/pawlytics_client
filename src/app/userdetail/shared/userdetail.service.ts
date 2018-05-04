import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class UserdetailService {

  constructor(private socketManager: SocketManagerService) { }

  updateUser(user){ 
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('update user',user).then(res=>{
        observer.next(res)
      })
    });
    return observable;
  }
}
