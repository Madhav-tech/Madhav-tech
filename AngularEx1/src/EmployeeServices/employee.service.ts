import { Injectable } from "@angular/core";
import { Employee } from "./employee";

@Injectable({providedIn:'root'})
export class EmployeeService{

    private employees:Employee[] = [{
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
    }];

    public getemployees(): Employee[]{
        return this.employees;
    }

    // public getEmployeeById(id:number){
    //     this.employees.filter()
    // }
    public updateEmployee(emp:Employee){
        let empIndex = this.employees.findIndex((obj => obj.id == emp.id));
        this.employees[empIndex].id = emp.id;
        this.employees[empIndex].first_name=emp.first_name;
        this.employees[empIndex].last_name=emp.last_name;
        this.employees[empIndex].email=emp.email;
        alert("Employee Updated Successfully");
    }

    public deleteEmployee(id:number){
        let empIndex = this.employees.findIndex((obj => obj.id == id));
        this.employees.splice(empIndex, 1);
        alert("Employee with ID "+id+" deleted");
    }
}