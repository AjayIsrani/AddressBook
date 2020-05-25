import { Component, OnInit } from '@angular/core';
import { APIAddressBookService } from '../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../DAO/User';
import { Title } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string = null;
  UserDAO: User = new User();
  PageHeader: string = 'Address Book Login';
  message: any;
  @ViewChild('LoginForm') formValues;
  constructor(private auth:AuthService, private _api: APIAddressBookService, private _route: Router, private _activatedRoute: ActivatedRoute, private title: Title) { }


  ngOnInit(): void {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('UserID');
    this.title.setTitle('AddressBook | Login');
  }
  
  Verify(form) {
    var a =this.auth.getUserDetails(form.UserName,form.Password)
    a.subscribe(
      (res:any) => {if(res.IsResult === 1){this._route.navigate(['/']); this.auth.setLoggedIn(true,res.ResultList[0].UserID);}else{ this.message = res.Message;setTimeout(()=>{this.message = "";},5000); this.formValues.resetForm();}}
    );
  }
  Resetform(){
    this.formValues.resetForm();
  }
}