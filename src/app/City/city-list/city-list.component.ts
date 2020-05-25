import { Component, OnInit } from '@angular/core';
import {APIAddressBookService } from '../../api-address-book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  City = [];
  Count: number = 0;
  Message : string;
  constructor(private _api: APIAddressBookService ,private _activatedRoute : ActivatedRoute, private _route: Router,private title: Title) { }
  
  ngOnInit(): void {
    this.title.setTitle('AddressBook | City List');
   var b =  this._api.getCityList()
   b.subscribe(
      (response:any) => this.City = response.ResultList
    );
    b.subscribe(
      (response:any) => {if(response.ResultList === null){this.Message="No Record Found";setTimeout(()=>{this.Message = "";},5000);}else{this.Count = response.ResultList.length;}}
    );
  }

  delete(id){
    var a = this._api.deleteCity(id);
    a.subscribe(
      (res)=>this.ngOnInit()
    );
    a.subscribe(
      (res:any)=>this.Message = res.Message
    );
  }

}
