import Person from "./person.js";
class Student extends Person{
    constructor(name,age,className){
        super(name,age);
        this.className=className;
    }
    introduce(){
        return `My name is ${super.name}. I am ${super.age} years old. I am a Student. I am at ${this.className}.`;
    }
}
exports["default"] = Student;
module.exports = exports["default"];

