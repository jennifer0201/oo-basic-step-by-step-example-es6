import Person from "./person.js";
class Student extends Person{
    constructor(name,age,className){
        super(name,age);
        this.className=className;
    }
    introduce(){
        var s=super.introduce();
        return s+` I am a Student. I am at Class ${this.className}.`;
    }
}
exports["default"] = Student;
module.exports = exports["default"];

