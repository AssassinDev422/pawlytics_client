import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import  * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable()
export class SocketManagerService {

	private serverUrl ;
	private isLoggedIn = false;
	private socket = null;
  static socket = null;

  constructor() { 
    this.serverUrl= environment.apiUrl; 
      if (window.sessionStorage.id != null) {
        // try to log back in with this key
        this.login(null, null, window.sessionStorage.id).
          then ( 
            result => {
              this.isLoggedIn = true;
              /**
               * we dont really do anything here because login will get a new socketId from
               * server and save to sessionStorage
               */
              console.log('relogged in using sessionStorage', SocketManagerService.socket.id);
              console.log('sessionStorage.id', window.sessionStorage.id);
            },
            reject => {
              // clear session storage
              /**
               * clear out old id on this failure, and now we really need username and password
               */
              window.sessionStorage.id = null;
              this.isLoggedIn = false;
              SocketManagerService.socket = null;
            }).catch ( e => console.log('SocketService: ',e));
      } 
  }


  login(username: string, password: string, sessionId: string) : Promise<object> {
		console.log('username',username,'password',password);
		return new Promise ( (resolve, reject) => {
			var init = io(this.serverUrl)
			if (init == null) reject ();
			else {
				var s = io.connect(this.serverUrl);
				s.on('connect', function(){
          /**
           * Initial ping, were connected but not in, this is our opportunity to send
           * credentials.  EITHER username and password OR sessionId
           */
					s.emit('authentication', [username, password, sessionId]);
					s.on('authenticated', function(reply) {
						// use the socket as usual 
						// note that socket.id is same on the server
						// so that's essentially the cookie
						console.log('success auth and reply: ',reply);
						SocketManagerService.socket = s;
            /**
             * successfully logged in, save our socket id in sessionStorage
             */
						window.sessionStorage.id = SocketManagerService.socket.id;
						resolve({success: true});
					});
					s.on('unauthorized', function(reply) {
						// use the socket as usual 
						// note that socket.id is same on the server
						// so that's essentially the cookie
						console.log('ERROR: sorry wrong creds man: ',reply);
            // clear sessionStorage
            window.sessionStorage.id = null;
            SocketManagerService.socket = null;
						reject({success: false, server: reply});
					});
				});
			}
		})
	}

  logout() : void {
    window.sessionStorage.id = null;
    this.isLoggedIn = false;
  }

	isLoginValid () : boolean {
		if (this.isLoggedIn) return true;
		else false;
	}

  public emit(handlerName: string, data: object) : Promise<object> {
    return new Promise ( (resolve, reject) => {
      SocketManagerService.socket.emit (handlerName, data, (error, response) => {
        if (error) {
          console.log('got error from server', error);
          reject(error);
        } else {
          resolve(response);
        }
      })
    })
  }
}
