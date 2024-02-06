import { Events } from './EventListeners.js';
import { ManageData } from './ManageData.js';
const addButton = document.getElementById('add-button');
const inputTask = document.getElementById('input-task');
const taskListElement = document.getElementById('list-tasks');
const event = new Events();
const manageData = new ManageData();
export class DomModification {
    constructor(){}
    render(){
            event.render(addButton,inputTask,taskListElement);
            manageData.loadData(taskListElement);
            // localStorage.removeItem("tasks");
    }
    createTaskItem(inputValue){
        const taskItem = document.createElement('li');
        taskItem.innerText=inputValue
        taskItem.appendChild(this.createEditButton());
        taskItem.appendChild(this.createRemoveButton());
        inputTask.value="";
        return taskItem;
    }
    createRemoveButton(){
        let removeElement = document.createElement('span');
        removeElement.innerHTML = '\u00d7';
        return removeElement;
    }
    createEditButton(){
        let editElement=document.createElement('p');
        editElement.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        return editElement;
    }
}