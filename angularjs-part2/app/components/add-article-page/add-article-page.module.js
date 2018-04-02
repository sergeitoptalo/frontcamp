import angular from 'angular';
import AddArticlePageComponent from './add-article-page.component';
import ArticleService from '../../service/article.service';

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
                resolve: {
                    backRoute: ($stateParams, $state) =>  {
                        let a = $state.getCurrentPath();
                        return $state;
                    }
                }
            })
        $urlRouterProvider.otherwise('/articles/page/1');
    })
    .name;

export default addArticlePage;
