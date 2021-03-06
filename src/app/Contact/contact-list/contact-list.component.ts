import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  Contact = [];
  Count: number = 0;
  Message : string;
  constructor(private _api: APIAddressBookService ,private _activatedRoute : ActivatedRoute, private _route: Router,private title: Title) { }
  
  ngOnInit(): void {
    this.title.setTitle('AddressBook | Contact List');
   var b =  this._api.getContactList()
   b.subscribe(
      (response:any) => this.Contact = response.ResultList
    );
    b.subscribe(
      (response:any) => {if(response.ResultList === null){this.Message="No Record Found";setTimeout(()=>{this.Message = "";},5000);}else{this.Count = response.ResultList.length;}}
    );
  }

  delete(id){
    var a = this._api.deleteContact(id);
    a.subscribe(
      (res)=>this.ngOnInit()
    );
    a.subscribe(
      (res:any)=>this.Message = res.Message
    );
  }
}
