import Person from "./person.js";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `My name is ${super.name}. I am ${super.old} years old. I am a Worker. I have a job.`;
    }
}
exports["default"] = Worker;
module.exports = exports["default"];
