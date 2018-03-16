import { NewTodosController } from './new-todos.controller';

angular.
    module('newTodos').
    component('newTodos', {
        templateUrl: 'app/components/new-todos/new-todos.template.html',
        controller: NewTodosController
    });
