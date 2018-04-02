import angular from 'angular';
import ArticleFormComponent from './article-form.component';
import ArticleService from '../../service/article.service';
import { ArticleMinLength } from './article-min-length.directive';

const articleForm = angular
    .module('article.form', [])
    .component('articleForm', ArticleFormComponent)
    .directive('articleMinLength', () => new ArticleMinLength())
    .service('ArticleService', ArticleService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

export default articleForm;
