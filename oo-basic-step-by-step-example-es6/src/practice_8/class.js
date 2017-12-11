class Class{
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(stu){
        if(stu.className.number === this.number) {
            this.leader = stu;
        }
    }
}
exports["default"] = Class;
module.exports = exports["default"];
