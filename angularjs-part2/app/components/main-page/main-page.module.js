import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainPageComponent from './main-page.component';
import ArticleService from '../../service/article.service';
import NewTodos from '../new-todos/new-todos.module';
import DoneTodos from '../done-todos/done-todos.module';
import ArticlesList from '../articles-list/articles-list.module';

const MainPageModule = angular
    .module('mainPage', [
        uiRouter,
        //NewTodos,
        //DoneTodos,
        ArticlesList
    ])
    .component('mainPage', MainPageComponent)
    .service('ArticleService', ArticleService)
    .name;

export default MainPageModule;
