import { Component, OnInit, ViewChild } from '@angular/core';
import {APIAddressBookService } from '../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../DAO/User';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id : string = null;
  UserDAO : User = new User();
  isEdit = true;
  message: any;
  @ViewChild('UserForm') formValues;
  PageHeader : string;
  Header : string;
  constructor(private _api: APIAddressBookService, private _route : Router, private _activatedRoute: ActivatedRoute,private title: Title) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('UserID');
    if(this.id!==null){
      this._api.getUserById(this.id).subscribe(
        (res:any)=> {this.UserDAO = res.ResultList[0],this.PageHeader='Welcome, '+ res.ResultList[0].UserName.toString();}
      );
      this.Header = "Edit Profile";
    this.title.setTitle('AddressBook | Home');
  }
  if(this.id===null){
    this._route.navigate(['Login']);
  }
  else{
    this.isEdit = false;
  }
}
EdittMode(){
  this.isEdit =true;
}
EditUser(form){
  if(this.id!==null){
    this._api.updateUser(form,this.id).subscribe(
      (res:any)=>{this.message=res.Message;setTimeout(()=>{this.message = "";},5000);this.ngOnInit();}
    )
  }
 }
 DisableEdit(){
  this.isEdit = false;
 }
}
