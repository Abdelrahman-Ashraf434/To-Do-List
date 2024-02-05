import { DomModification } from "./DomModification.js";

export class TaskList{
     taskArray=[];
     constructor(){}
     addTask(inputValue) {
        if(inputValue === '') {
            alert('You need to write something first');
        }
        else{
            const add = new DomModification();
            this.taskArray.push(inputValue);
            add.createTaskItem(inputValue);
            console.log(this.taskArray);
        }
    }
    removeTask(taskItem) {
        this.taskArray.splice(this.taskArray.indexOf(taskItem), 1);
        console.log(this.taskArray);
    }
    
}
