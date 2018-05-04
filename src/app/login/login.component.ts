import { Component, OnInit } from '@angular/core'; 
import { SocketManagerService} from '../shared/socket/socket-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus:string = 'Not Logged In Sorry';
  username:string="";
  password:string="";
  constructor(private socketService : SocketManagerService, private router:Router) {  
  }

  ngOnInit() {
  } 

  submitLogin(): void {
    this.socketService.login(this.username, this.password, null).
        then ( 
            resolve => {
                this.loginStatus = 'Success login';
                this.router.navigate(['/home']);
                console.log(this.loginStatus);
            },
            reject => {
                this.loginStatus = 'Success login... nope';
                console.log(reject);
            }).
        catch ( err => console.log (' crazy error everybody ',err));
}

}
