import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainPageComponent from './main-page.component';
import ArticleService from '../../service/article.service';
import ArticlesList from '../articles-list/articles-list.module';

const MainPageModule = angular
    .module('mainPage', [
        uiRouter,
        ArticlesList
    ])
    .component('mainPage', MainPageComponent)
    .service('ArticleService', ArticleService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('mainPage', {
                url: '/articles/page/:id',
                component: 'mainPage',
                resolve: {
                    current: ($stateParams) =>  {
                        return $stateParams.id;
                    }
                }
            })
        $urlRouterProvider.otherwise('/articles/page/1');
    })
    .name;

export default MainPageModule;
