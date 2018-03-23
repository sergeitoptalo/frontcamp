import angular from 'angular';
import MainPageModule from './main-page/main-page.module';
//import { DoneTodosModule } from './done-todos/done-todos.module';
import TodoFormModule from './todo-form/todo-form.module';
import AddTaskButtonModule from './addTaskButton/add-task-button.module';

const ComponentsModule = angular
    .module('app.components', [
        MainPageModule,
        TodoFormModule,
        AddTaskButtonModule
    ])
    .name;

export default ComponentsModule;
