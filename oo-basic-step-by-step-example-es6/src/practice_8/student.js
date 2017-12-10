import Person from "./person.js";
class Student extends Person{
    constructor(sno,name,age,className){
        super(sno,name,age);
        this.className=className;
    }
    introduce(){
        if(typeOf(this.leader)==="undefined"){
           return `My name is ${super.name}. I am ${super.age} years old. I am a Student. I am at ${this.className.number}.`;
       }
       else{
           return `My name is ${super.name}. I am ${super.age} years old. I am a Student. I am Leader of ${this.className.number}.`; 
       }
    }
}
exports["default"] = Student;
module.exports = exports["default"];