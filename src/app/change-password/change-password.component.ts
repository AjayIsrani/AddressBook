import { Component, OnInit, ViewChild } from '@angular/core';
import { APIAddressBookService } from '../api-address-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../DAO/User';
import { Title } from '@angular/platform-browser';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  id: string = null;
  UserDAO: User = new User();
  message: any = "";
  @ViewChild('UserForm') formValues;
  PageHeader: string;
  Header: string;
  constructor(private _api: APIAddressBookService, private _route: Router, private _activatedRoute: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('UserID');
    if (this.id !== null) {
      this._api.getUserById(this.id).subscribe(
        (res: any) => { this.UserDAO = res.ResultList[0], this.PageHeader = 'Welcome, ' + res.ResultList[0].UserName.toString(); }
      );
      this.Header = "Change Your Password";
      this.title.setTitle('AddressBook | Change Password');
    }
    if (this.id === null) {
      this._route.navigate(['Login']);
    }
  }

  ChangePassword(form) {
    this.message ="";
    if (this.id !== null) {
      if (form.Password !== null) {
        if (this.UserDAO.Password !== form.Password) {
          this.message = "Invalid Entered Password. Kindly Enter Your Valid Old Password. ";
          setTimeout(() => { this.message = ""; }, 5000);
        }
      }
      else{
        this.message += " Enter Password is Required. ";
      }
      if (form.NewPassword !== null) {
        if (form.Password === form.NewPassword) {
          this.message += " Same Password. Kindly Enter Other Password. ";
          setTimeout(() => { this.message = ""; }, 5000);
        }
      }
      else{
        this.message += " Enter New Password is Requried. ";
      }
      if (form.ReTypePassword !== null) {
        if (form.NewPassword !== form.ReTypePassword) {
          this.message += " The Re-type Password not match with the New Password. Kindly Enter match Password. ";
          setTimeout(() => { this.message = ""; }, 5000);
        }
      }
      else{
        this.message += " Enter Re-Type Password is Requried. ";
      }

      if (this.message === "") {
        this._api.updatePassword(form, this.id).subscribe(
          (res: any) => { this.message = res.Message; setTimeout(() => { this.message = ""; }, 5000); if (res.IsResult === 1) { this._route.navigate(['Home']); } }
        )
      }
    }
  }

}
