import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
addUser(user:any){
  let usersArray=[];
  if(localStorage.getItem('Users')){
    usersArray=JSON.parse(localStorage.getItem('Users'));
  }
  return usersArray.find(p=>p.userName === user.userName && p.password === user.userPassword);

}

}
