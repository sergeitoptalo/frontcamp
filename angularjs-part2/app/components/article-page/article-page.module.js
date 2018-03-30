import angular from 'angular';
import ArticlePageComponent from './article-page.component';
import ArticleService from '../../service/article.service';

const articlePage = angular
    .module('article.article-page', [])
    .component('articlePage', ArticlePageComponent)
    .service('ArticleService', ArticleService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('article', {
                url: '/articles/:id',
                component: 'articlePage',
                resolve: {
                    articleData: (ArticleService, $stateParams) => ArticleService.getArticle($stateParams.id)
                }
            })
        $urlRouterProvider.otherwise('/articles/page/1');
    })
    .name;

export default articlePage;
