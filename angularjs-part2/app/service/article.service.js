class ArticleService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getArticles() {
        return this.$http.get('/api/articles');
    }

    getArticle(id) {
        return this.$http.get(`/api/edit/${id}`);
    }

    addArticle(article) {
        return this.$http({ method: 'POST', url: '/api/add', data: article });
    }

    updateArticle(article) {
        return this.$http({ method: 'PUT', url: `/api/update/${article._id}`, data: article })
    }
}

ArticleService.$inject = ['$http', '$q'];

export default ArticleService;
