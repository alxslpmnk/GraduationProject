import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }
  IsUserLogin(): Promise<{}>
  { 
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.get(environment.apiUrl + "check/", {headers}).subscribe(resp => { 
        resolve(resp);
      },
      (error: Response)=>{
        if(error.status == 401 || 405){  
          this.router.navigateByUrl('/login');
          resolve();
        }
      });
    });

    return promise;
  }

  onLogin(userName, password)  : Promise<{}> 
  { 
    var promise = new Promise((resolve, reject) => {
    
    this.http.post(environment.apiUrl + "auth/", { 'UserName' : userName , 'Password' : password }, {observe: 'response'}).subscribe( 
      (response) => { 
        console.log(response.body.toString());
        //localStorage.setItem('Bearer', response.body.toString()); 
        //localStorage.setItem('UserType', response.headers.get('X-UserType'));

        //if(localStorage.getItem('UserType') == "Admin"){
       //   AppComponent.IsAdmin = true;
       // }
       // else
       // {
       //   AppComponent.IsAdmin = false;
      //  }
      //  console.log(AppComponent.IsAdmin);
        resolve(true);
      },
      (error)=>{  
          alert('Username or password is invalid');
      }); 
    });

    return promise;
  } 
}
