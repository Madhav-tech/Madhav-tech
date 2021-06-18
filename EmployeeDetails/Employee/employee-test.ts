import { Department } from "../Department/department";
import { Skill } from "../Skill/skill";
import { Employee } from "./employee";


class DepartmentImpl implements Department{
    id = 9001;
    name = 'JAVA';
}
class SkillImpl implements Skill{
    id = 11;
    name = 'HTML5';
}

class EmployeeImpl implements Employee{
    id: number;
    name: string;
    salary: number;
    permanent: boolean;
    department: Department;
    skill:Skill;

    constructor(id:number,name:string,salary:number,permanent:boolean,department:Department,skill:Skill){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.permanent=permanent;
        this.department=department;
        this.skill=skill;
    }
}

let department = new DepartmentImpl();
let skill = new SkillImpl();


let emp = new EmployeeImpl(1001,'Ramesh',1234.5677,true,department,skill);
console.log('ID:',emp.id);
console.log('Name:',emp.name);
console.log('Salary:',emp.salary);
console.log('Is Permanent:',emp.permanent);
console.log("Department id:",emp.department.id);
console.log("Department Name",emp.department.name);
console.log("Skill id:",emp.skill.id);
console.log("Skill Name",emp.skill.name)