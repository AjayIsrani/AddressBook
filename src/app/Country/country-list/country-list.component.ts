import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { Country } from 'src/app/DAO/Country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  
  Country = [];
   Count: number = 0;
  Message : string;
  constructor(private _api: APIAddressBookService ,private _activatedRoute : ActivatedRoute, private _route: Router,private title: Title) { }
  
  ngOnInit(): void {
    this.title.setTitle('AddressBook | Country List');
   var b =  this._api.getCountryList()
   b.subscribe(
      (response:any) => this.Country = response.ResultList
    );
    b.subscribe(
      (response:any) =>  {if(response.ResultList === null){this.Message="No Record Found";setTimeout(()=>{this.Message = "";},5000);}else{this.Count = response.ResultList.length;}}
    );
  }

  delete(id){
    var a = this._api.deleteCountry(id);
    a.subscribe(
      (res)=>this.ngOnInit()
    );
    a.subscribe(
      (res:any)=>this.Message = res.Message
    );
  }
}
