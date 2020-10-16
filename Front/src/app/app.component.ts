import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'corporative-sn';
  static isLogged: boolean = false;
  isUserLogged: boolean = false;
  static IsAdmin: boolean = false;
  constructor(
    private router: Router,
    private  route: ActivatedRoute,
    private _authService: AuthService){}
    get staticisLogged(){
        return AppComponent.isLogged;
    }
    ngOnInit() {
      this.isLogin();
      this.isUserLogged=AppComponent.isLogged;
    }
   
    isLogin(){
      var promise = this._authService.IsUserLogin(); 
      promise.then(value => {
        if(value){ 
          this.router.navigate(['/chats']);
          AppComponent.isLogged=true;
        }else{ 
          this.router.navigate(['/login']);
          AppComponent.isLogged=false;
        }
      });  
    }

    Login(){

    }
    
  Profile(){
    this.router.navigateByUrl("/profile");
  };
  Messages(){
    this.router.navigateByUrl("/chats");
  };
  Requests(){
    this.router.navigateByUrl("/requestform");
  };
  Calendar(){
    this.router.navigateByUrl("/calendar");
  };
  Logout(){
    this.router.navigateByUrl("/login");
    AppComponent.isLogged=false;
  };
}
export class User{
  id: number;
  userName: string;
  password: string;
  name:string;
}