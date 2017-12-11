import Person from "./person.js";
class Student extends Person{
    constructor(sno,name,age,className){
        super(sno,name,age);
        this.className=className;
    }
    introduce(){
        var s=super.introduce();
        if(typeof(this.className.leader)==="undefined"){
           return s+` I am a Student. I am at Class ${this.className.number}.`;
       }
       else{
           return s+` I am a Student. I am Leader of Class ${this.className.number}.`;
       }
    }
}
module.exports = Student;