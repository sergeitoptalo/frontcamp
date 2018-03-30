class ArticlesListController {
    constructor(EventEmitter, $stateProvider) {
        'ngInject';
        this.EventEmitter = EventEmitter;
        //this.daysAgo = '';
        //this.sortingReverse = false;
        //this.sortingPropertyName = '';
        //this.currentPage = 1;
        this.nextPage = null;
        this.itemsOnPage = 3;
        this.pages = 0;
        this.currentPage;
    }

    $onInit() {
        let _this = this;
    }

    $onChanges(changes) {
        this.pages = Math.ceil(this.articles.length / this.itemsOnPage);
        if (this.pages > 1) {
            this.nextPage = this.current + 1;
        }

        /* if (changes.current) {
            this.currentPage = changes.currentPage;
        } */
    }

    detectCurrentPage() {
        let a = this.currentPage;
    }

    getNextPage() {
        this.currentPage += 1;
    }

}

ArticlesListController.$inject = ['EventEmitter'];

export default ArticlesListController;
