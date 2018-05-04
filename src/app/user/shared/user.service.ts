import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class UserService {

  private socket: any;

  constructor(private socketManager: SocketManagerService){
    this.socket= SocketManagerService.socket;  

  }

  getUsers(){
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('get all users',{}).then(res=>{
        observer.next(res)
      })
    });
    return observable;
  }

  getOrgs(){
    let observable = new Observable<any>(observer => {        
      this.socketManager.emit('get all orgs',{}).then(res=>{
        observer.next(res)
      })
    });
    return observable;
  }
}