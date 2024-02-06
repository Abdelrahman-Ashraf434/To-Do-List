export class ManageData {
    saveData(taskList){
       localStorage.setItem('tasks', taskList.innerHTML);
   }
    loadData(taskList){
       if(localStorage.getItem('tasks') === null){
           return;
       }
       taskList.innerHTML = localStorage.getItem('tasks');
   }
}