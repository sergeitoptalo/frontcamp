class ArticlesListController {
    constructor(EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
        //this.daysAgo = '';
        //this.sortingReverse = false;
        //this.sortingPropertyName = '';
    }

}

ArticlesListController.$inject = ['EventEmitter'];

export default ArticlesListController;
