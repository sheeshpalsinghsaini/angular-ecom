import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from 'src/app/services/auth-helper.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  isLogin=false
  user:any=null



  constructor(
    private authHelper:AuthHelperService
  ) { }

  ngOnInit(): void {

    //this.isLogin = this.authHelper.checkLogin()   //if user login, make it true.
    //this.user = this.isLogin?this.authHelper.getCurrentUser():null  //assign in user

    this.updateLoginDetails()
   this.authHelper.loginLogoutEmitter.subscribe(value=>{
    //this.isLogin = this.authHelper.checkLogin()
    //this.user = this.isLogin?this.authHelper.getCurrentUser():null 
    this.updateLoginDetails()
   })


  }

  //logout user

  logOutUser(){
    this.authHelper.logout()
    //this.isLogin=false
    //this.user = null
  }

  updateLoginDetails(){
    this.isLogin = this.authHelper.checkLogin()
    this.user = this.isLogin?this.authHelper.getCurrentUser():null
  }

}
