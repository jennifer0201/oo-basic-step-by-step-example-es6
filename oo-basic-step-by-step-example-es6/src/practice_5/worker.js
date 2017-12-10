import Person from "./person.js";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `My name is ${super.name}. I am ${super.age} years old. I am a Teacher. I have a job.`;
    }
}
exports["default"] = Worker;
module.exports = exports["default"];
