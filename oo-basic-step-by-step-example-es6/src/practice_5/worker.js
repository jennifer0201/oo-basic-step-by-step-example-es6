import Person from "./person.js";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        var s=super.introduce();
        return s+` I am a Teacher. I have a job.`;
    }
}
exports["default"] = Worker;
module.exports = exports["default"];
