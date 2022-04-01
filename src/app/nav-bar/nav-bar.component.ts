import { Component, OnInit } from '@angular/core';
import { AlertifyserviceService } from '../services/alertifyservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser:string;
  constructor(private alertyfy:AlertifyserviceService) { }


  ngOnInit() {
  }

  loggedin(){
    return this.loggedinUser= localStorage.getItem('token');
  }
  onLogout(){
    return  localStorage.removeItem('token');
    this.alertyfy.Success("You are loggedOut");
  }

}
