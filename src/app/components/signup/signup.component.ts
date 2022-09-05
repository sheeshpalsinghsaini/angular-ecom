import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user= {
    name:"",
    email:'',
    password:'',
    address:'',
    about:'',
    phone:'',
    gender:''
  }

  // we are injecting/autowire UserService and ToastrService here.
  constructor(private userService:UserService, private toast:ToastrService) { }


  // sun on submiting the form 
  submitForm(event:any){
    // alert("Hii")
    // console.log(event);
    event.preventDefault();
    console.log(this.user);

    if(this.user.name.trim()===''){
        this.toast.error("username is blank!!")
        return;
    }else if(this.user.email.trim()===''){
      this.toast.error("email is blank!!")
      return;
    }

    //form submit
    this.userService.createUser(this.user).subscribe((success)=>{
      console.log(success)
      this.toast.success("User is registered successfully!!")
    },(error)=>{
      console.log(error)
      if(error.status==400){
        console.log(error.error);   //by this we can got all the object of error.

        let msg = ``;
        for(let i in error.error){
         // console.log(i+" "+error.error[i]);
         msg = msg + ` ${error.error[i]} <br>`
        }
        this.toast.error(msg,'',{
          enableHtml:true
        })
      }
      
    },()=>{
      console.log("completed");
    })


  }
  ngOnInit(): void {
  }

}
