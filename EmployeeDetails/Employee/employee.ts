import { Department } from "../Department/department";

export interface Employee{
    id:number;
    name:string;
    salary:number;
    permanent:boolean;
    department:Department;
}