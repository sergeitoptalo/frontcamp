import angular from 'angular';
import ngRoute from 'angular-route';

//import routes from './app.routes';
import { TodoListController } from './app.controller';
import { todosFactory } from './factory/todosFactory';
require('./components/new-todos/new-todos.module');
require('./components/done-todos/done-todos.module');
require('./components/todo-form/todo-form.module');

export const todoApp = angular.module('todoApp', [ngRoute, 'newTodos', 'doneTodos', 'todoForm']);
todoApp.factory('todosFactory', todosFactory);
todoApp.filter('filterByDays', function() {
    return function(todos, daysAgo) {
        let result = todos;
        if (daysAgo) {
            result = todos.filter(todo => daysAgo === new Date().getDate() - new Date(todo.date).getDate());
        }
        
        return result;
    }
});

require('./app.config');
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
