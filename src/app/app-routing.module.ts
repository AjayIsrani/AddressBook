import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AuthGuard } from './auth/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:'' , component: HomeComponent,canActivate: [AuthGuard]},
  {path:'Country' , component: CountryListComponent,canActivate: [AuthGuard]},
  {path: 'Country/Add',component: CountryAddEditComponent,canActivate: [AuthGuard]},
  {path: 'Country/Edit/:id',component: CountryAddEditComponent,canActivate: [AuthGuard]},
  {path:'State' , component: StateListComponent,canActivate: [AuthGuard]},
  {path: 'State/Add',component: StateAddEditComponent,canActivate: [AuthGuard]},
  {path: 'State/Edit/:id',component: StateAddEditComponent,canActivate: [AuthGuard]},
  {path:'City' , component: CityListComponent,canActivate: [AuthGuard]},
  {path: 'City/Add',component: CityAddEditComponent,canActivate: [AuthGuard]},
  {path: 'City/Edit/:id',component: CityAddEditComponent,canActivate: [AuthGuard]},
  {path:'Contact' , component: ContactListComponent,canActivate: [AuthGuard]},
  {path: 'Contact/Add',component: ContactAddEditComponent,canActivate: [AuthGuard]},
  {path: 'Contact/Edit/:id',component: ContactAddEditComponent,canActivate: [AuthGuard]},
  {path:'ContactCategory' , component: ContactCategoryListComponent,canActivate: [AuthGuard]},
  {path: 'ContactCategory/Add',component: ContactCategoryAddEditComponent,canActivate: [AuthGuard]},
  {path: 'ContactCategory/Edit/:id',component: ContactCategoryAddEditComponent,canActivate: [AuthGuard]},
  {path:'ChangePassword' , component: ChangePasswordComponent,canActivate: [AuthGuard]},

  {path:'Login' , component: LoginComponent},
  {path:'SignUp', component: SignUpComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
