import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { SocketManagerService } from '../../shared/socket/socket-manager.service';

@Injectable()
export class ManagepeopleService {

  constructor(private socketManager: SocketManagerService) { }

  getVolunteers(){
    let observable = new Observable<any>(observer=>{
      this.socketManager.emit('get all volunteers',{}).then(res=>{
        observer.next(res);
      })
    });
    return observable;
  }
  getEmployees(){
    let observable = new Observable<any>(observer=>{
      this.socketManager.emit('get all employees',{}).then(res=>{
        observer.next(res);
      })
    });
    return observable;
  }
}
