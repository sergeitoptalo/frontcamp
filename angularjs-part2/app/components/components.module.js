import angular from 'angular';
import MainPageModule from './main-page/main-page.module';
//import ArticlesListPageModule from './articles-list-pagination/articles-list-page.module';
import AddArticlePageModule from './add-article-page/add-article-page.module';
import ArticleFormModule from './article-form/article-form.module';
import ArticlePageModule from './article-page/article-page.module';
/*import AddTaskButtonModule from './addTaskButton/add-task-button.module';
import AddTodoPageModule from './add-todo-page/add-todo-page.module'; */
import EditArticlePageModule from './edit-article-page/edit-article-page.module';

const ComponentsModule = angular
    .module('app.components', [
        MainPageModule,
        //ArticlesListPageModule,
        AddArticlePageModule,
        ArticleFormModule,
        //AddTaskButtonModule,
        //AddTodoPageModule,
        EditArticlePageModule,
        ArticlePageModule
    ])
    .name;

export default ComponentsModule;
