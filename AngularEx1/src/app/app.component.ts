import { Component } from '@angular/core';
import { EmployeeList } from 'src/employeeList/emplyeeList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEx1';
  employee:any={};

  notifyEmployee($event:any){
    //console.log('$event')

   // console.log($event)
    this.employee=$event;
  } 
  
}
