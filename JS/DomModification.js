import {TaskList} from './TaskList.js';
const taskList = new TaskList();
const addButton = document.getElementById('add-button');
const inputTask = document.getElementById('input-task');

export class DomModification {
    constructor(){
        addButton.addEventListener('click', ()=>{
            taskList.addTask(inputTask.value);
        });
    }
    createTaskItem(inputValue){
        const taskItem = document.createElement('li');
        taskItem.innerText=inputValue;
        taskItem.appendChild(this.createEditButton());
        taskItem.appendChild(this.createRemoveButton());
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
//     markTasks(){
//         taskList.addEventListener("click", function(event) {
//         if(event.target.tagName === "LI") {
//             event.target.classList.toggle("checked");
//         }
//     })
// }
}