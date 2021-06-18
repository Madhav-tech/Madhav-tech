import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/EmployeeServices/employee';
import { EmployeeService } from 'src/EmployeeServices/employee.service';


@Component({
    templateUrl: 'employee.component.html',
    selector: 'employee_detail'
})

export class EmployeeDetail implements OnInit {
    employee!:Employee;
     id:any;
     sub:any;
    constructor(private Activatedroute: ActivatedRoute,
        private router: Router,
        private empService: EmployeeService) { }
        
    ngOnInit():void{
        this.sub = this.Activatedroute.paramMap.subscribe(params =>{
            //console.log(params);
            this.id = params.get('id');
            let employees = this.empService.getemployees();
           
            const selectedEmployee = employees.filter((item:any)=>item.id==this.id);
            this.employee = selectedEmployee[0];
           //console.log(this.employee);
        });
    
    }
    delete():any{
        this.empService.deleteEmployee(this.employee.id);
        this.router.navigate(['employeelist']);
    }

   
}

