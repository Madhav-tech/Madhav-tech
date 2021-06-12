import{Component} from '@angular/core';


@Component({
    templateUrl:'employee.component.html',
    selector:'employee_detail'
})

export class EmployeeDetail{
    employee:any = [
                    {id:1001,name:'ramesh',age:19},
                    {id:1002,name:'umesh',age:21},
                    {id:1003,name:'mahesh',age:22},
                    {id:1004,name:'suresh',age:19}
                ]
}  