class EditArticlePageController {
    constructor(ArticleService) {
        this.articleService = ArticleService;
    }

    $onChanges(changes) {
        if (changes.articleData) {
            this.articleData = this.articleData.data;
        }
    }
}

EditArticlePageController.$inject = ['ArticleService'];

export default EditArticlePageController;
