import Person from "./person.js";
class Student extends Person{
    constructor(name,age,className){
        super(name,age);
        this.className=className;
    }
    introduce(){
      return `I am a Student. I am at Class ${this.className}.`;
    }
}
module.exports =Student