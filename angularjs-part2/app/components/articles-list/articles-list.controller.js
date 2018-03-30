class ArticlesListController {
    constructor(EventEmitter, $stateProvider) {
        'ngInject';
        this.EventEmitter = EventEmitter;
        this.previousPage = 0;
        this.nextPage = null;
        this.itemsOnPage = 8;
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
