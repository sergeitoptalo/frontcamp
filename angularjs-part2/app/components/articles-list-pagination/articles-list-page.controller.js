class ArticlesListPageController {
    constructor(ArticleService, EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
        this.articleService = ArticleService;
        this.articles = [];
        //this.daysAgo = '';
        //this.sortingReverse = false;
        //this.sortingPropertyName = '';
    }

    $onInit() {
        this.updateArticles();
    }

    updateArticles() {
        this.articleService.getArticles()
            .then(response => {
                this.articles = response.data.reverse();
            })
    }

}

ArticlesListPageController.$inject = ['ArticleService', 'EventEmitter'];

export default ArticlesListPageController;
