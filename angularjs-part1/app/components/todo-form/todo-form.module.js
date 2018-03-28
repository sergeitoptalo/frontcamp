import angular from 'angular';
import TodoFormComponent from './todo-form.component';
import TodoService from '../../service/todo.service';
import { TodoMinLength } from './todo-min-length.directive';

const todoForm = angular
    .module('todo.form', [])
    .component('todoForm', TodoFormComponent)
    .directive('todoMinLength', () => new TodoMinLength())
    .service('TodoService', TodoService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

export default todoForm;
