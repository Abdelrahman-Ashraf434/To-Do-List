import { DomModification } from "./DomModification.js";
import { ManageData } from "./ManageData.js";
const manageData = new ManageData();
export class TaskList{
     constructor(){}
     addTask(inputValue,taskListElement) {
        if(inputValue === '') {
            alert('You need to write something first');
        }
        else{
            const create = new DomModification();
            taskListElement.appendChild(create.createTaskItem(inputValue));
            manageData.saveData(taskListElement);
            manageData.loadData(taskListElement);
        }
    }    
}