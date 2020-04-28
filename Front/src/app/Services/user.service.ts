import { Injectable, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';     
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { AotCompiler } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor(private http: HttpClient,private router: Router) { 
 
  }

  DeleteUser(id): Promise<{}> {
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key); 
      
      this.http.delete(AppComponent.BaseUrl + "/user?id=" + id, {headers }).subscribe(resp => {  
        resolve(resp);
      },
      (error: Response)=>{  
        reject();
      });
    });

    return promise;
  }

  UpdateUser(Id, UserName, Email, IsActive, IsLocked): Promise<{}> { 
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.post(AppComponent.BaseUrl + "/user/",{id: Id, userName: UserName,  email:Email,  isActive:IsActive,  isLocked:IsLocked}, {headers}).subscribe(resp => { 
        resolve(resp);
      },
      (error: Response)=>{ 
        alert('This user already exist.'); 
        reject();
      });
    });

    return promise;
  }

  UpdateUserRole(Users): Promise<{}> {  
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.post(AppComponent.BaseUrl + "/UserRole/",{users: Users}, {headers}).subscribe(resp => { 
        resolve(resp);
      },
      (error: Response)=>{ 
        alert('This user role already exist.'); 
        reject();
      });
    });

    return promise;
  }

  UpdateRole(Id, Name,   IsActive ): Promise<{}> { 
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.post(AppComponent.BaseUrl + "/role/",{Id: Id, Name: Name,  IsActive:IsActive}, {headers}).subscribe(resp => { 
        resolve(resp);
      },
      (error: Response)=>{ 
        alert('This role already exist.'); 
        reject();
      });
    });

    return promise;
  }
  DeleteRole(id): Promise<{}> {
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key); 
      
      this.http.delete(AppComponent.BaseUrl + "/role?id=" + id, {headers }).subscribe(resp => {  
        resolve(resp);
      },
      (error: Response)=>{  
        reject();
      });
    });

    return promise;
  }
  IsUserLogin () : Promise<{}>
  { 
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.get(AppComponent.BaseUrl + "/Account/", {headers}).subscribe(resp => { 
        resolve(resp);
      },
      (error: Response)=>{
        if(error.status == 401 || 405){  
          this.router.navigateByUrl('/home');
          resolve();
        }
      });
    });

    return promise;
  }

  
  onCreateUser(userName,password,email,userTypeId) : Promise<{}>
  { 
    var promise = new Promise((resolve, reject) => {
      
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.put(AppComponent.BaseUrl + '/User/', 
      { 'UserName' : userName ,
       'Password' : password, 
       'Email' : email,
       'UserTypeId' : userTypeId},
       {headers: headers,observe: 'response'}).subscribe( 
        () => {   
          resolve();
        },
        ()=>{ 
          alert('This user already exist.'); 
          reject();
        }); 
      });
      return promise;
    };  

  GetUsers()  : Promise<{}> 
  { 
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.get(AppComponent.BaseUrl + "/User/", {headers}).subscribe(resp => {
        resolve(resp);
      },
      (error: Response)=>{
        if(error.status == 401 || 405){  
          
          this.router.navigateByUrl('/home');
          reject();
        }
      });
    });

    return promise;
  }

  GetUser(id) : Promise<{}> 
  { 
    var promise = new Promise((resolve, reject) => {
      var key = localStorage.getItem('Bearer'); 
      const  headers = new  HttpHeaders().set('Authorization', 'Bearer ' + key);
      this.http.get(AppComponent.BaseUrl + "/User?id=" + id, {headers}).subscribe(resp => {
        resolve(resp);
      },
      (error: Response)=>{
        if(error.status == 401 || 405){   
          this.router.navigateByUrl('/home');
          reject();
        } 
      });
    });

    return promise;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
  onLogin(userName, password)  : Promise<{}> 
  { 
    var promise = new Promise((resolve, reject) => {
    
    this.http.post(AppComponent.BaseUrl + '/user/auth', { 'UserName' : userName , 'Password' : password }, {observe: 'response'}).subscribe( 
      (response) => { 
        localStorage.setItem('Bearer', response.body.toString()); 
        localStorage.setItem('UserType', response.headers.get('X-UserType'));

        if(localStorage.getItem('UserType') == "Admin"){
          //AppComponent.IsAdmin = true;
        }
        else
        {
          //AppComponent.IsAdmin = false;
        }
        //console.log(AppComponent.IsAdmin);
        resolve(true);
      },
      (error)=>{  

        if(error.headers.get('X-UserIsActive'))
        {
          alert('Your user is not active contact your administrator.');
        }
        else if(error.headers.get('X-UserIsLocked'))
        {
          alert('Your user is blocked contact your administrator.');
        }
        else
        {
          alert('Username or password is invalid');
        }
      }); 
    });

    return promise;
  } 
}
