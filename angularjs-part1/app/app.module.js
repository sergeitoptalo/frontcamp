import angular from 'angular';
import uiRouter from 'angular-ui-router';

//import routes from './app.routes';
import { TodoListController } from './app.controller';
require('./components/new-todos/new-todos.module');

export const todoApp = angular.module('todoApp', ['newTodos']);
//todoApp.controller('TodoListController', TodoListController);

//require('./todoList.component');

/* export default angular.module('todoApp', [route, todoListComponent])
    .config(routes) */

/* app.factory("todoFactory", function(){
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
});

app.controller('toDoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.tasks = todoFactory.getTasks()
    $scope.newTaskName = '';

    $scope.addTask = function () {
        todoFactory.addTask($scope.newTaskName)
        $scope.newTaskName = '';
    };

    $scope.removeTask = function (text) {
        todoFactory.removeTask(text);
    }
}]);
 */
