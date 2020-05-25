import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  State = [];
  Count: number = 0;
  Message : string;
  constructor(private _api: APIAddressBookService ,private _activatedRoute : ActivatedRoute, private _route: Router,private title: Title) { }
  
  ngOnInit(): void {
    this.title.setTitle('AddressBook | State List');
   var b =  this._api.getStateList()
   b.subscribe(
      (response:any) => this.State = response.ResultList
    );
    b.subscribe(
      (response:any) => {if(response.ResultList === null){this.Message="No Record Found";setTimeout(()=>{this.Message = "";},5000);}else{this.Count = response.ResultList.length;}}
    );
  }

  delete(id){
    var a = this._api.deleteState(id);
    a.subscribe(
      (res)=>this.ngOnInit()
    );
    a.subscribe(
      (res:any)=>this.Message = res.Message
    );
  }

}
