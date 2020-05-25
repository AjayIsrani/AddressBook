import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '../../DAO/Country';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-country-add-edit',
  templateUrl: './country-add-edit.component.html',
  styleUrls: ['./country-add-edit.component.css']
})
export class CountryAddEditComponent implements OnInit {

  id : string = null;
  CountryDAO : Country = new Country();
  isEdit = false;
  PageHeader : string = 'Country Add';
  Message : string;
  constructor(private _api: APIAddressBookService, private _route : Router, private _activatedRoute: ActivatedRoute,private title: Title) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.id!==null){
       this.PageHeader='Country Edit';
      this._api.getCountryById(this.id).subscribe(
        (res:any)=> this.CountryDAO = res.ResultList[0]
      );
  }
  if(this.id===null){
    this.title.setTitle('AddressBook | Country Add');
    this.isEdit = false;
  }
  else{
    this.title.setTitle('AddressBook | Country Edit');
    this.isEdit = true;
  }
}
addCountry(form){
  if(form.CountryName !== "" && form.CountryCode !== ""){
    if(this.id===null){
      this._api.insertCountry(form).subscribe(
            (res)=>this._route.navigate(['../../Country'])
          );
    }
    else{
      this._api.updateCountry(form,this.id).subscribe(
        (res)=>this._route.navigate(['../../../Country'])
      )
    }
  }
 else{
   this.Message ="Country Name and Code both are Required";
   setTimeout(()=>{this.Message = "";},5000);
  }
}
}
