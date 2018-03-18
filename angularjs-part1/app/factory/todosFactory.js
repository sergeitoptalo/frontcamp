export function todosFactory() {
    var taskList = ["New Delhi", "Mumbai", "Kolkata", "Chennai"];
    let doneTasks = [];
    return {
        getTasks: function getTasks() {
            return taskList;
        },
        getDoneTasks: function getDoneTasks() {
            return doneTasks;
        },
        addTask: function addTask(text) {
            taskList.push(text);
        },
        removeTask: function removeTask(text) {
            taskList.splice(taskList.indexOf(text), 1)
        },
        switchTaskToDone: function switchTaskToDone(task) {
            doneTasks.push(task);
            taskList.splice(taskList.indexOf(task), 1);
        },
        switchTaskToNew: function switchTaskToDone(task) {
            taskList.push(task);
            doneTasks.splice(doneTasks.indexOf(task), 1);
        }
    };
}
