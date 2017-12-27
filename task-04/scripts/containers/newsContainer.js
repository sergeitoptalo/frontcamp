let { articlesApi } = require('../api/articlesApi');

class NewsContainer {
    constructor() {
        this.apiKey = '1de7e5223cf14337a6dd0e1330b80c7f';
    }

    getArticles(source) {
        let articles = articlesApi(source, this.apiKey)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let { articles } = data;
                return articles;
            });

        return articles;
    }

    getArticlesContainer() {
        return document.querySelector('#news-container');
    }
}

module.exports = NewsContainer;
