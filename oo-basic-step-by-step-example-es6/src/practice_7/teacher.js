import Person from "./person.js";
class Teacher extends Person{
    constructor(name,age,className){
        super(name,age);
        this.className=className;
    }
    introduce(){
        if(typeof(this.className) === 'undefined'){
            return `My name is ${super.name}. I am ${super.age} years old. I am a Teacher. I teach No Class.`;
        }
        else{
            return `My name is ${super.name}. I am ${super.age} years old. I am a Teacher. I teach Class ${this.className.number}.`;
    }
    }
    introduceWith(stu){
        if(stu.className.number!=this.className.number){
            return `My name is ${super.name}. I am ${super.age} years old. I am a Teacher. I don't teach ${stu.name}`;
        }
        else{
            return `My name is ${super.name}. I am ${super.age} years old. I am a Teacher. I teach ${stu.name}`;
        }
    }
}
exports["default"] = Teacher;
module.exports = exports["default"];
