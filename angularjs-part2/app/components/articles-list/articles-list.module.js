import angular from 'angular';
import ArticlesListComponent from './articles-list.component';

const articlesList = angular
    .module('mainPage.articlesList', [])
    .component('articlesList', ArticlesListComponent)
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

export default articlesList;
