import angular from 'angular';
import ArticleFormComponent from './article-form.component';
import ArticleService from '../../service/article.service';
//import { TodoMinLength } from './todo-min-length.directive';

const articleForm = angular
    .module('article.form', [])
    .component('articleForm', ArticleFormComponent)
    //.directive('todoMinLength', () => new TodoMinLength())
    .service('ArticleService', ArticleService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

export default articleForm;
