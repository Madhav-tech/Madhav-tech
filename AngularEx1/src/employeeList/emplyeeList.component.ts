import { Component, EventEmitter, Output,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/EmployeeServices/employee.service";

@Component({
    selector: 'employee_list',
    templateUrl: "employeeList.component.html"
})
export class EmployeeList implements OnInit {
    empServive: EmployeeService;
    constructor(private router: Router, private empService: EmployeeService) { 
        this.empServive = empService;
    }
    employees: any = [];
    isTrue: boolean = false;
    selectedEmployee: any;
    name: string = '';
    @Output() employeeChange: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit():void{
        this.employees = this.empService.getemployees();
    }

    show(): any {
        console.log('Inside show function');
        if (this.isTrue)
            this.isTrue = false
        else
            this.isTrue = true;

    }


    test(id: number) {
        const filteredEmployees = this.employees.filter((employee: any) => employee.id == id);
        this.selectedEmployee = filteredEmployees[0];
        this.employeeChange.emit(this.selectedEmployee);
        this.router.navigate(['employeedetails', this.selectedEmployee.id]);
    }
}


