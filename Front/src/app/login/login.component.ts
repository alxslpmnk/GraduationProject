import { Component, OnInit } from '@angular/core'; 
import {Router,ActivatedRoute, RouterLink} from "@angular/router"
import {  HttpClient, HttpHeaders  } from '@angular/common/http';    
import { UserService } from '../Services/user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userName : string;
  password : string;
  static IsLogin: boolean = false; 
 
 
  constructor(private router: Router,
              private  route: ActivatedRoute,   
              private http: HttpClient,
              private _userService: UserService) { 
      }
  
  ngOnInit() { }

  onLogin() { 
    var promise = this._userService.onLogin(this.userName,this.password);
    promise.then(response=>
    {
      if(response)
      {
        this.router.navigateByUrl('/home');
      }
    });
  }  

  static IsUserLogin(){ 
    return this.IsLogin;
  }
}