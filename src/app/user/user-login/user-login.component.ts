import { Component, OnInit } from '@angular/core';
import { NgForm, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyserviceService } from 'src/app/services/alertifyservice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userAuth:AuthService,
    private alertify:AlertifyserviceService,
    private router:Router) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm){
    console.log(loginForm.value);
    const token = this.userAuth.addUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertify.Success("Login Sucessfully");
      this.router.navigate(['/']);
    }else{
      this.alertify.Errors("Login Faild");
    }
  }

}
