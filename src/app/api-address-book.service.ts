import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class APIAddressBookService {

  userid;
  // apiUrl = "http://localhost/AddressBook/Api/AB/AddressBook/";
  apiUrl = "http://localhost:57584/Api/AB/AddressBook/";

  constructor(private _http: HttpClient,public router: Router) { }
  
  getCountryList(){
    this. userid = localStorage.getItem('UserID');
    return this._http.get(this.apiUrl +this.userid+"/"+"GetCountryList"+"/Countries");
  }
  getCountryById(id){
    this. userid = localStorage.getItem('UserID');
    return this._http.get(this.apiUrl +this.userid+"/"+"SelectCountryByPK"+"/"+id);
  }
  insertCountry(form){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.post(this.apiUrl +this.userid+"/"+"Country_Insert",formbody.toString(), {headers : header});
  }
  updateCountry(form,id){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"Country_Update"+"/"+id,formbody.toString(), {headers : header});
  }
  deleteCountry(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.delete(this.apiUrl +this.userid+"/"+"Country_Delete"+"/"+id);
  }

  getStateListByCountryID(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"GetStateListByCountryID"+"/"+id);
  }

  getStateList(){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"GetStateList");
  }
  getStateById(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"SelectStateByPK"+"/"+id);
  }
  insertState(form){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.post(this.apiUrl +this.userid+"/"+"State_Insert",formbody.toString(), {headers : header});
  }
  updateState(form,id){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"State_Update"+"/"+id,formbody.toString(), {headers : header});
  }
  deleteState(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.delete(this.apiUrl +this.userid+"/"+"State_Delete"+"/"+id);
  }

  getCityListByStateID(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"GetCityListByStateID"+"/"+id);
  }

  getCityList(){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"GetCityList");
  }
  getCityById(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"SelectCityByPK"+"/"+id);
  }
  insertCity(form){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.post(this.apiUrl +this.userid+"/"+"City_Insert",formbody.toString(), {headers : header});
  }
  updateCity(form,id){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"City_Update"+"/"+id,formbody.toString(), {headers : header});
  }
  deleteCity(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.delete(this.apiUrl +this.userid+"/"+"City_Delete"+"/"+id);
  }

  getContactCategoryList(){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"GetContactCategoryList");
  }
  getContactCategoryById(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"SelectContactCategoryByPK"+"/"+id);
  }
  insertContactCategory(form){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.post(this.apiUrl +this.userid+"/"+"ContactCategory_Insert",formbody.toString(), {headers : header});
  }
  updateContactCategory(form,id){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"ContactCategory_Update"+"/"+id,formbody.toString(), {headers : header});
  }
  deleteContactCategory(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.delete(this.apiUrl +this.userid+"/"+"ContactCategory_Delete"+"/"+id);
  }

  getContactList(){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"GetContactList");
  }
  getContactById(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"SelectContactByPK"+"/"+id);
  }
  insertContact(form){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.post(this.apiUrl +this.userid+"/"+"Contact_Insert",formbody.toString(), {headers : header});
  }
  updateContact(form,id){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"Contact_Update"+"/"+id,formbody.toString(), {headers : header});
  }
  deleteContact(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.delete(this.apiUrl +this.userid+"/"+"Contact_Delete"+"/"+id);
  }

  getUserLoginByUsernameAndPassword(UserName,Password){
   return this._http.get(this.apiUrl+"SelectByUserNameAndPassword"+"/"+UserName+"/"+Password);
  }
  getCheckByUserName(UserName){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"CheckByUserName"+"/"+UserName);
  }
  getUserById(id){
    this. userid = localStorage.getItem('UserID');
   return this._http.get(this.apiUrl +this.userid+"/"+"SelectUserByPK"+"/"+id);
  }
  insertUser(form){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.post(this.apiUrl +this.userid+"/"+"User_Insert",formbody.toString(), {headers : header});
  }
  updateUser(form,id){
    let formbody = new URLSearchParams(form);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"User_Update"+"/"+id,formbody.toString(), {headers : header});
  }

  updatePassword(form,id){
    let newform = "Password="+form.NewPassword;
    let formbody = new URLSearchParams(newform);
    let header = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
    this. userid = localStorage.getItem('UserID');
   return this._http.put(this.apiUrl +this.userid+"/"+"User_UpdatePassword"+"/"+id,formbody.toString(), {headers : header});
  }
}
