import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({           //we can do autowire it anywhere.
  providedIn: 'root'
})
export class AuthHelperService {


  @Output()
  public loginLogoutEmitter:EventEmitter<Boolean> = new EventEmitter();



  constructor() { }


  //login   => will save token 

  login(data:any){
    localStorage.setItem("data",JSON.stringify(data));    // now user login
    this.loginLogoutEmitter.emit(true);
  }

  //logout => remove token 

  logout(){
    localStorage.removeItem("data");
    this.loginLogoutEmitter.emit(false)
  }

  //checkLogin

  checkLogin(){
    let data = localStorage.getItem("data");

    if(data){
      let obj = JSON.parse(data);
      if(obj.token && obj.user){
          return true
      }
    }

    return false;
  }


  //getToken

  getToken(){
    if(this.checkLogin()){
      let data = localStorage.getItem("data")
      return data ? JSON.parse(data).token:null;
    }
    return null;
  }

  //getCurrentUser 

  getCurrentUser(){
    if(this.checkLogin()){
      let data = localStorage.getItem("data");
      return data ? JSON.parse(data).user:null;
    }
    return null;
  }

}
