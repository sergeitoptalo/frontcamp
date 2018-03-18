export function todosFactory() {
    var taskList = ["New Delhi", "Mumbai", "Kolkata", "Chennai"];
    return {
        getTasks: function getTasks() {
             return taskList;
        },
        addTask: function addTask(text){
            taskList.push(text);
        },
        removeTask: function removeTask(text){
            taskList.splice(taskList.indexOf(text), 1)
    	}
    };
}
