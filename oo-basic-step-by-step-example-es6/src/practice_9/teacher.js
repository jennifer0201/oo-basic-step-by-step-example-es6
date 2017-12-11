import Person from "./person.js";
class Teacher extends Person{
    constructor(sno,name,age,className){
        super(sno,name,age);
        this.className=className;
    }
    introduce(){
        var s=super.introduce();
        if(typeof(this.className) === 'undefined'){
            return s+` I am a Teacher. I teach No Class.`;
        }
        else{
            return s+` I am a Teacher. I teach Class ${this.className.number}.`;
    }
    }
    }
exports["default"] = Teacher;
module.exports = exports["default"];

