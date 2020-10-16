import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService,
    private router:Router) { }
  userName : string;
  password : string;
  ngOnInit(): void {
    
  }
//Login(){    var promise = this._authService.onLogin(this.userName,this.password);
  //promise.then(response=>
  //{
    //if(response)
    //{
      //this.router.navigateByUrl('/chats');
      //AppComponent.isLogged=true;
    //}
  //});};

  Login(){

    if(this.userName=="ivanov" && this.password=="ivanov")
    {this.router.navigateByUrl('/chats');
  AppComponent.isLogged=true;}
  else{
    alert('Incorrect username or password')
    this.router.navigateByUrl('/login')
    AppComponent.isLogged=false;
  }
  }
}
