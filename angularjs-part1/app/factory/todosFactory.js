export function todosFactory() {
    var taskList = [{
        text: 'task1',
        date: '2018-03-17T15:04:42.580Z'
    },
    {
        text: 'task2',
        date: '2018-03-18T15:04:42.580Z'
    },
    {
        text: 'task3',
        date: '2018-03-19T15:04:42.580Z'
    }];

    let doneTasks = [];
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
}
