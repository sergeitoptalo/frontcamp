import angular from 'angular';
import ArticlesListPageComponent from './articles-list-page.component';
import ArticleService from '../../service/article.service';

const articlesListPage = angular
    .module('articlesListPage', [])
    .component('articlesListPage', ArticlesListPageComponent)
    .service('ArticleService', ArticleService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('articles', {
                url: '/articles',
                component: 'articlesListPage',
            })
        $urlRouterProvider.otherwise('/articles');
    })
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

export default articlesListPage;
