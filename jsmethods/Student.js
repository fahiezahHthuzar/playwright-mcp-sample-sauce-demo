import { Person } from './Person.js'
export class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;   
    }

    getStudentDetails(){
        const partentDetails = super.getDetails();
        return `${partentDetails}, Grade ${this.grade}`;
    }
}