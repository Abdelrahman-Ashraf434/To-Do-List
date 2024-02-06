import {TaskList} from './TaskList.js';
import { ManageData } from './ManageData.js';
const manageData = new ManageData();
const taskList = new TaskList();
export class Events{
    constructor(){}
    render(addButton,inputTask,taskListElement){
            addButton.addEventListener('click', ()=>{
                return taskList.addTask(inputTask.value,taskListElement);
            });
            inputTask.addEventListener('keypress', function(event) {
                if(event.key === 'Enter') {
                    return taskList.addTask(inputTask.value,taskListElement);
                }
            });
        taskListElement.addEventListener("click", function(event) {
                event.currentTarget.classList.toggle("checked");
                manageData.saveData(taskListElement);
        });
        taskListElement.addEventListener("click", function(event) {
            if(event.target.tagName === "SPAN" ) {
                if(confirm("Are you sure you want to delete this task?")){
                       event.target.parentElement.remove();
                        manageData.saveData(taskListElement);
                    }
                }
                else{
                    return;
                }
            });
        taskListElement.addEventListener("click", function(event) {
            if(event.target.tagName === "LI") {
                event.target.classList.toggle("checked");
                manageData.saveData(taskListElement);
            }
        });
        taskListElement.addEventListener("click", function(event) {
            if(event.target.tagName === "P" ) {
                // event.target.parentElement.classList.toggle("editMode");
                const editInput = document.createElement('input');
                editInput.type = 'text';
                console.log("1- " + editInput.value);
                editInput.value = event.target.parentElement.textContent;
                event.target.parentElement.replaceChild(editInput, event.target.parentElement.childNodes[0]);
                editInput.focus();
                editInput.addEventListener('blur', function(event) {
                    editInput.blur();
                });

                
            }
        }); 
    }
}
