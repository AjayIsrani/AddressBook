import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  Logout(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('UserID');
    if(!localStorage.loggedIn && !localStorage.UserID){
      this.router.navigate(['Login']);
    }
  }
}
