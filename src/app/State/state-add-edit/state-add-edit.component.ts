import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from '../../DAO/State';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-state-add-edit',
  templateUrl: './state-add-edit.component.html',
  styleUrls: ['./state-add-edit.component.css']
})
export class StateAddEditComponent implements OnInit {

  id : string = null;
  StateDAO : State = new State();
  isEdit = false;
  Country = [];
  PageHeader : string = 'State Add';
  constructor(private _api: APIAddressBookService, private _route : Router, private _activatedRoute: ActivatedRoute,private title: Title) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._api.getCountryList().subscribe(
      (response:any) => this.Country = response.ResultList
    );
  
    if(this.id!==null){
       this.PageHeader='State Edit';
      this._api.getStateById(this.id).subscribe(
        (res:any)=> this.StateDAO = res.ResultList[0]
      );
  }
  if(this.id===null){
    this.title.setTitle('AddressBook | State Add');
    this.isEdit = false;
  }
  else{
    this.title.setTitle('AddressBook | State Edit');
    this.isEdit = true;
  }
}
addState(form){
  if(this.id===null){
    this._api.insertState(form).subscribe(
          (res)=>this._route.navigate(['../../State'])
        );
  }
  else{
    this._api.updateState(form,this.id).subscribe(
      (res)=>this._route.navigate(['../../../State'])
    )
  }
 }
}
