/* export function todosFactory() {
    return {
        getTasks: function getTasks() {
            return taskList;
        },
        getDoneTasks: function getDoneTasks() {
            return doneTasks;
        },
        addTask: function addTask(task) {
            taskList.push(task);
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
} */



class TodosFactory {
    constructor(TodoService) {
        this.TodoService = TodoService;
    }

    getTodos() {
        this.TodoService.getTodos();
    }
}

TodosFactory.$inject = ['TodoService'];

export default TodosFactory;
