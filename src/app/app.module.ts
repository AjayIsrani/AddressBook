import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './Country/country-list/country-list.component';
import { CountryAddEditComponent } from './Country/country-add-edit/country-add-edit.component';
import { StateListComponent } from './State/state-list/state-list.component';
import { StateAddEditComponent } from './State/state-add-edit/state-add-edit.component';
import { CityListComponent } from './City/city-list/city-list.component';
import { CityAddEditComponent } from './City/city-add-edit/city-add-edit.component';
import { ContactAddEditComponent } from './Contact/contact-add-edit/contact-add-edit.component';
import { ContactListComponent } from './Contact/contact-list/contact-list.component';
import { ContactCategoryListComponent } from './ContactCategory/contact-category-list/contact-category-list.component';
import { ContactCategoryAddEditComponent } from './ContactCategory/contact-category-add-edit/contact-category-add-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard'
import { APIAddressBookService } from './api-address-book.service';
import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountryListComponent,
    CountryAddEditComponent,
    StateListComponent,
    StateAddEditComponent,
    CityListComponent,
    CityAddEditComponent,
    ContactAddEditComponent,
    ContactListComponent,
    ContactCategoryListComponent,
    ContactCategoryAddEditComponent,
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APIAddressBookService,AuthService, AuthGuard],   
  bootstrap: [AppComponent]
})
export class AppModule { }
