import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { EmployeeService } from "src/EmployeeServices/employee.service";
import { Employee } from "src/EmployeeServices/employee";

@Component({
    selector:'edit_employee',
    templateUrl:'editemployee.component.html'
})

export class EditEmployee implements OnInit {
    employeeForm!: FormGroup;
    employee!: Employee ;
    id:any;
    sub:any;
    
    // = new FormGroup({
    //     firstName: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(4)
    //      Validators.pattern()]),
    //     lastName: new FormControl(''),
    //     email: new FormControl( [Validators.required]),
    
    //   });

    constructor(
        private fb:FormBuilder, 
        private Activatedroute: ActivatedRoute,
        private router: Router,
        private empService: EmployeeService
        ) { 

            this.createForm();
        }
    createForm() {
        this.employeeForm = this.fb.group({
            id: '',
            first_name: '',
            last_name: '',
            email: '',
           
          });
    }




    ngOnInit():void{
        this.sub = this.Activatedroute.paramMap.subscribe(params =>{
            //console.log(params);
            this.id = params.get('id');
            let employees = this.empService.getemployees();
           
            const selectedEmployee = employees.filter((item:any)=>item.id==this.id);
            this.employee = selectedEmployee[0];
          this.employeeForm.patchValue(this.employee);
        });
    }
    onSubmit(_form: any) {
        if(_form.valid){
            console.log(_form.value);
            this.empService.updateEmployee(_form.value);
            this.router.navigate(['employeedetails',this.id])
        }
      }
}
