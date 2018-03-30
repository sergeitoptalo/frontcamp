class ArticleFormController {
    constructor(ArticleService, EventEmitter) {
        'ngInject';
        this.articleService = ArticleService;
        this.EventEmitter = EventEmitter;
    }

    onSubmit() {
        if (this.article) {
            if (!this.article.creationDate) {
                this.articleService.addArticle({
                    articleTitle: this.article.articleTitle,
                    articleText: this.article.articleText,
                    creationDate: new Date()
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.onAddArticle(
                                this.EventEmitter(response.data)
                            );
                            this.article.articleTitle = '';
                            this.article.articleText = '';
                        }
                    })
            } else {
                this.articleService.updateArticle({
                    _id: this.article._id,
                    articleText: this.article.articleText,
                    updateDate: new Date()
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.onUpdateArticles(
                                this.EventEmitter(response.data)
                            );
                        }
                        
                    })
            }
        }
    }
}

ArticleFormController.$inject = ['ArticleService', 'EventEmitter'];

export default ArticleFormController;
