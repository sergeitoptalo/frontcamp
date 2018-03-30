import angular from 'angular';
import ArticlesListComponent from './articles-list.component';

const articlesList = angular
    .module('articlesList', [])
    .component('articlesList', ArticlesListComponent)
    .value('EventEmitter', payload => ({ $event: payload }))
    .filter('pagination', function () {
        return function (articles, currentPage, itemsOnPage) {
            let result = articles;

            result = result.slice(currentPage * itemsOnPage - itemsOnPage, currentPage * itemsOnPage);

            return result;
        }
    })
    .name;

export default articlesList;
