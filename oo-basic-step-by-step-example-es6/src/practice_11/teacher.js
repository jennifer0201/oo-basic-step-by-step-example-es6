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
            var str="";
            for(let i in this.className){
                if(this.className.indexOf(this.className[i])!=this.className.length-1) {
                    str += ` ${this.className[i].number},`;
                }
                else{
                    str += ` ${this.className[i].number}.`;
                }
            }
            return s+` I am a Teacher. I teach Class`+str;
        }    
        }
    registerAssignLeaderListener(student)
    {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.className.number}.`);
    }

    registerJoinListener(student)
    {
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.className.number}.`);
    }
    }
exports["default"] = Teacher;
module.exports = exports["default"];

