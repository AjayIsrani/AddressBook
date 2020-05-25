import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {APIAddressBookService } from '../../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { City } from '../../DAO/City';

@Component({
  selector: 'app-city-add-edit',
  templateUrl: './city-add-edit.component.html',
  styleUrls: ['./city-add-edit.component.css']
})
export class CityAddEditComponent implements OnInit {

  id : string = null;
  CityDAO : City = new City();
  isEdit = false;
  Country = [];
  State = [];
  PageHeader : string = 'City Add';
  constructor(private _api: APIAddressBookService, private _route : Router, private _activatedRoute: ActivatedRoute,private title: Title) { }

  ngOnInit(): void {
    
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._api.getCountryList().subscribe(
      (response:any) => this.Country = response.ResultList
    );
    if(this.id!==null){
       this.PageHeader='City Edit';
      this._api.getCityById(this.id).subscribe(
        (res:any)=> this.CityDAO = res.ResultList[0]
      );
      this.selectedIndexChangeCountry(this.id);
  }

  if(this.id===null){
    this.title.setTitle('AddressBook | City Add');
    this.isEdit = false;
  }
  else{
    this.title.setTitle('AddressBook | City Edit');
    this.isEdit = true;
  }
}

selectedIndexChangeCountry(id){
  this._api.getStateListByCountryID(id).subscribe(
    (response:any) => this.State = response.ResultList
  );
}

addCity(form){
  if(this.id===null){
    this._api.insertCity(form).subscribe(
          (res)=>this._route.navigate(['../../City'])
        );
  }
  else{
    this._api.updateCity(form,this.id).subscribe(
      (res)=>this._route.navigate(['../../../City'])
    )
  }
 }
}
