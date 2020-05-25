import { Component, OnInit, ViewChild } from '@angular/core';
import { APIAddressBookService } from '../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../DAO/User';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  UserDAO: User = new User();
  PageHeader: string = 'Registration Form';
  message: any;
  @ViewChild('SignUpForm') formValues;
  constructor(private auth:AuthService,private _api: APIAddressBookService, private _route: Router, private _activatedRoute: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('AddressBook | SignUp');
  }
  addUser(form) {
    console.log(form);
    var b =this._api.getCheckByUserName(form.UserName)
    b.subscribe(
      (res:any) => {if(res.IsResult === 1){this.message = res.Message;setTimeout(()=>{this.message = "";},7000);}else{
    this._api.insertUser(form).subscribe(
      (res:any) => {if(res.IsResult === 1){this.message = res.Message;setTimeout(()=>{this.message = "";},5000);
    var a =this.auth.getUserDetails(form.UserName,form.Password)
    a.subscribe(
      (res:any) => {if(res.IsResult === 1){this._route.navigate(['/']); this.auth.setLoggedIn(true,res.ResultList[0].UserID);}else{ this.message = res.Message;setTimeout(()=>{this.message = "";},5000);}}
    );}else{this.message = res.Message;setTimeout(()=>{this.message = "";},5000);this.formValues.resetForm();}
      });
    }});
  }

  Resetform(){
    this.formValues.resetForm();
  }
}
