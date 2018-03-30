class ArticlePageController {
    constructor(ArticleService) {
        this.articleService = ArticleService;
    }

    $onChanges(changes) {
        if (changes.articleData) {
            this.articleData = this.articleData.data;
        }
    }
}

ArticlePageController.$inject = ['ArticleService'];

export default ArticlePageController;
