import angular from 'angular';
import MainPageModule from './main-page/main-page.module';
//import ArticlesListPageModule from './articles-list-pagination/articles-list-page.module';
import AddArticlePageModule from './add-todo-page/add-article-page.module';
/* import TodoFormModule from './todo-form/todo-form.module';
import AddTaskButtonModule from './addTaskButton/add-task-button.module';
import AddTodoPageModule from './add-todo-page/add-todo-page.module';
import EditTodoPageModule from './edit-todo-page/edit-todo-page.module'; */

const ComponentsModule = angular
    .module('app.components', [
        MainPageModule,
        //ArticlesListPageModule,
        AddArticlePageModule
        //TodoFormModule,
        //AddTaskButtonModule,
        //AddTodoPageModule,
        //EditTodoPageModule
    ])
    .name;

export default ComponentsModule;
