"use strict";
exports.__esModule = true;
var DepartmentImpl = /** @class */ (function () {
    function DepartmentImpl() {
        this.id = 9001;
        this.name = 'JAVA';
    }
    return DepartmentImpl;
}());
var SkillImpl = /** @class */ (function () {
    function SkillImpl() {
        this.id = 11;
        this.name = 'HTML5';
    }
    return SkillImpl;
}());
var EmployeeImpl = /** @class */ (function () {
    function EmployeeImpl(id, name, salary, permanent, department, skill) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.permanent = permanent;
        this.department = department;
    }
    return EmployeeImpl;
}());
var department = new DepartmentImpl();
var skill = new SkillImpl();
var emp = new EmployeeImpl(1001, 'Ramesh', 1234.5677, true, department, skill);
console.log('ID:', emp.id);
console.log('Name:', emp.name);
console.log('Salary:', emp.salary);
console.log('Is Permanent:', emp.permanent);
console.log("Department id:", emp.department.id);
console.log("Department Name", emp.department.name);
console.log("Skill id:", emp.skill.id);
console.log("Skill Name", emp.skill.name);
