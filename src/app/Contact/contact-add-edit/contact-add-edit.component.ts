import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {APIAddressBookService } from '../../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../../DAO/Contact';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.css']
})
export class ContactAddEditComponent implements OnInit {

  id : string = null;
  ContactDAO : Contact = new Contact();
  isEdit = false;
  ContactCategory = [];
  Country = [];
  State = [];
  City = [];
  PageHeader : string = 'Contact Add';
  constructor(private _api: APIAddressBookService, private _route : Router, private _activatedRoute: ActivatedRoute,private title: Title) { }

  ngOnInit(): void {
    
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._api.getCountryList().subscribe(
      (response:any) => this.Country = response.ResultList
    );
    this._api.getContactCategoryList().subscribe(
      (response:any) => this.ContactCategory = response.ResultList
    );
    if(this.id!==null){
       this.PageHeader='Contact Edit';
      this._api.getContactById(this.id).subscribe(
        (res:any)=> this.ContactDAO = res.ResultList[0]
      );
      this.selectedIndexChangeCountry(this.id);
      this.selectedIndexChangeState(this.id);
  }

  if(this.id===null){
    this.title.setTitle('AddressBook | Contact Add');
    this.isEdit = false;
  }
  else{
    this.title.setTitle('AddressBook | Contact Edit');
    this.isEdit = true;
  }
}

selectedIndexChangeCountry(id){
  this._api.getStateListByCountryID(id).subscribe(
    (response:any) => this.State = response.ResultList
  );
}
selectedIndexChangeState(id){
  this._api.getCityListByStateID(id).subscribe(
    (response:any) => this.City = response.ResultList
  );
}

addContact(form){
  if(this.id===null){
    this._api.insertContact(form).subscribe(
          (res)=>this._route.navigate(['../../Contact'])
        );
  }
  else{
    this._api.updateContact(form,this.id).subscribe(
      (res)=>this._route.navigate(['../../../Contact'])
    )
  }
 }

}
