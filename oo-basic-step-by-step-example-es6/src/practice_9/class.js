class Class{
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(student.className.number===this.number){
            this.leader = student;
        }
        else{
            return "It is not one of us.";
        }
    }
    appendMemeber(stu){
        stu.className=this;
    }
}
exports["default"] = Class;
module.exports = exports["default"];

