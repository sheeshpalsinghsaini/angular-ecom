import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_usrl="http://localhost:8080"


  constructor(private httpClient:HttpClient) { }

  //create new user
  createUser(user:any){
    //request api 
    return this.httpClient.post(`${this.base_usrl}/users/`,user)

  }


  //user login
  generateToken(loginData:any){
    return this.httpClient.post(`${this.base_usrl}/auth/login`,loginData);
  }
}
