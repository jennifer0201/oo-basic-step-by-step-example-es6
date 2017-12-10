var str="";
class Class{
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student,teacher){
        if(student.className.number===this.number){
            this.leader = student;
            str=`I am ${teacher.name} I know ${student.name} become Leader of Class ${this.number}.`;
        }
        else{
            console.log("It is not one of us.");
            str=`I am ${teacher.name} I know ${student.name} has joined Class ${this.number}.`;
        }
    }
    registerAssignLeaderListener(teacher){
        console.log(str);
    }
    appendMemeber(stu){
        stu.className=this;
    }
}
exports["default"] = Class;
module.exports = exports["default"];

