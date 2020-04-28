import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './Services/user.service'

import { User } from './_models';
import { fromEventPattern } from 'rxjs';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    static BaseUrl: string = "http://localhost:12453/api";
    private _userService: UserService; 
    constructor(
        private router: Router,
       
    ) {
        
    }
    ngOnInit(){
        this.isLogin();
    }
    isLogin(){
        var promise = this._userService.IsUserLogin(); 
        promise.then(value => {
          if(value){ 
            this.router.navigate(['/home'])
          }else{ 
            this.router.navigate(['/login'])
          }
        });  
      }
    logout() {
        this.router.navigate(['/login']);
    }
}