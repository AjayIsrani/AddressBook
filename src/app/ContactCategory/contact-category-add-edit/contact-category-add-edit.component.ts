import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactCategory } from '../../DAO/ContactCategory';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-category-add-edit',
  templateUrl: './contact-category-add-edit.component.html',
  styleUrls: ['./contact-category-add-edit.component.css']
})
export class ContactCategoryAddEditComponent implements OnInit {

  id : string = null;
  ContactCategoryDAO : ContactCategory = new ContactCategory();
  isEdit = false;
  PageHeader : string = 'Contact Category Add';
  constructor(private _api: APIAddressBookService, private _route : Router, private _activatedRoute: ActivatedRoute,private title: Title) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.id!==null){
       this.PageHeader='Contact Category Edit';
      this._api.getContactCategoryById(this.id).subscribe(
        (res:any)=> this.ContactCategoryDAO = res.ResultList[0]
      );
  }
  if(this.id===null){
    this.title.setTitle('AddressBook | Contact Category Add');
    this.isEdit = false;
  }
  else{
    this.title.setTitle('AddressBook | Contact Category Edit');
    this.isEdit = true;
  }
}
addContactCategory(form){
  if(this.id===null){
    this._api.insertContactCategory(form).subscribe(
          (res)=>this._route.navigate(['../../ContactCategory'])
        );
  }
  else{
    this._api.updateContactCategory(form,this.id).subscribe(
      (res)=>this._route.navigate(['../../../ContactCategory'])
    )
  }
 }
}
