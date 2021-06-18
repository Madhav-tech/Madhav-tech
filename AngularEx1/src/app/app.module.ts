import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Greeting} from './../greeting/greeting.component'
import {EmployeeDetail} from './../employeeDetails/employee.component'
import { EmployeeList } from 'src/employeeList/emplyeeList.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/pipe/filter.pipe';
import { LoginForm } from 'src/loginForm/loginForm.component';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployee } from 'src/EditEmployeeDetails/editemployee.component';
import { RegisterUser } from 'src/registerUser/registerUser.component';

const routes: Routes = [
  { path: '', component: LoginForm },
  { path: 'employeelist', component: EmployeeList },
  { path: 'employeedetails/:id', component: EmployeeDetail },
  {path: 'editemployee/:id',component:EditEmployee},
  {path:'register',component:RegisterUser},
];

@NgModule({
  declarations: [
    AppComponent,Greeting,EmployeeDetail,EmployeeList, FilterPipe ,LoginForm,EditEmployee,RegisterUser
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
