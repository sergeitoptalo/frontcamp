import angular from 'angular';
import EditArticlePageComponent from './edit-article-page.component';
import ArticleService from '../../service/article.service';

const editArticlePage = angular
    .module('article.edit-article-page', [])
    .component('editArticlePage', EditArticlePageComponent)
    .service('ArticleService', ArticleService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('edit', {
                url: '/edit/:id',
                component: 'editArticlePage',
                resolve: {
                    articleData: (ArticleService, $stateParams) => ArticleService.getArticle($stateParams.id)
                }
            })
        $urlRouterProvider.otherwise('/articles/page/1');
    })
    .name;

export default editArticlePage;
