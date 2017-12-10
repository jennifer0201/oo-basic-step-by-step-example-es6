import Person from "./person.js";
class Teacher extends Person{
    constructor(sno,name,age,className){
        super(sno,name,age);
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
    }
exports["default"] = Teacher;
module.exports = exports["default"];
