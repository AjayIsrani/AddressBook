import { Injectable } from '@angular/core';
import { APIAddressBookService } from './api-address-book.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')||'false'); 
  private UserID : number = null;
  constructor(private _api: APIAddressBookService) { }
  setLoggedIn(value: boolean,UserID : number){
    this.loggedInStatus = value;
    this.UserID = UserID;
    localStorage.setItem('loggedIn','true');
    localStorage.setItem('UserID',this.UserID.toString());
  }
  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')||this.loggedInStatus.toString()); 
  }
  
  getUserDetails(UserName,Password) {
    return this._api.getUserLoginByUsernameAndPassword(UserName,Password)
  }
}
