import angular from 'angular';
import AddArticlePageComponent from './add-article-page.component';
import ArticleService from '../../service/article.service';
import ArticlesListPageComponent from '../articles-list-pagination/articles-list-page.component';

const addArticlePage = angular
    .module('articlesListPage.add-article-page', [])
    .component('addArticlePage', AddArticlePageComponent)
    .service('ArticleService', ArticleService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('add', {
                url: '/add',
                component: 'addArticlePage',
            })
        $urlRouterProvider.otherwise('/articles/page/1');
    })
    .name;

export default addArticlePage;
